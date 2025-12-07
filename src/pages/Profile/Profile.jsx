import { Link, useLoaderData } from "react-router-dom";
import ActionButton from "../../components/singles/ActionButton";
import Input from "../../components/singles/Input";
import Checkbox from "../../components/singles/Checkbox";
import Title from "../../components/singles/Title";
import Wallpaper from "./Wallpaper";
import Avatar from "./Avatar";
import Textarea from "../../components/singles/Textarea";
import Span from "../../components/singles/Span";
import { useState } from "react"
import { API_BASE_URL, API_DATA_WITH_MEDIA, API_ENDPOINTS } from "../../constants";
import { useGlobalState } from "../../components/GlobalProvider";

function UserProfile() {
    const loaderData = useLoaderData();
    const { updatedProfile, setUpdatedProfile } = useGlobalState();

    const {
        avatar,
        first_name,
        full_desc,
        last_name,
        link_to_instagram,
        link_to_telegram,
        link_to_github,
        link_to_vk,
        profession,
        short_desc,
        // user,
        // primary_email,
        wallpaper
    } = loaderData.data;

    // Добавляем состояние для загрузки
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [newAvatarFile, setNewAvatarFile] = useState(null);
    const [newWallpaperFile, setNewWallpaperFile] = useState(null);

    // Обработчик сабмита формы
    async function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(event.target);
            
            const submitData = new FormData();
            
            // Добавляем текстовые поля
            submitData.append('first_name', formData.get('firstName') || '');
            submitData.append('last_name', formData.get('lastName') || '');
            submitData.append('profession', formData.get('profession') || '');
            submitData.append('short_desc', '');
            submitData.append('full_desc', formData.get('aboutSelf') || '');
            submitData.append('link_to_instagram', formData.get('insta') || '');
            submitData.append('link_to_telegram', formData.get('telegram') || '');
            submitData.append('link_to_github', formData.get('github') || '');
            submitData.append('link_to_vk', formData.get('vk') || '');
            
            if (newAvatarFile && newAvatarFile.size > 0) {
                submitData.append('avatar', newAvatarFile);
            }

            if (newWallpaperFile && newWallpaperFile.size > 0) {
                submitData.append('wallpaper', newWallpaperFile);
            }

            const response = await fetch(
                `${API_BASE_URL}${API_ENDPOINTS.USERS.PROFILE.UPDATE(localStorage.getItem('auth:userId'))}`,
                API_DATA_WITH_MEDIA("POST", submitData)
            );

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            const data = await response.json();
            console.log('Profile updated:', data);
                        
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Ошибка при обновлении профиля');
        } finally {
            setIsSubmitting(false);
            setUpdatedProfile(updatedProfile + 1);
        }
    }

    function handleAvatar(file) {
        setNewAvatarFile(file)
    }

    function handleWallpaper(file) {
        setNewWallpaperFile(file)
    }

    return (
        <form 
            onSubmit={handleSubmit}
            encType="multipart/form-data">
            {/* <Title>Профиль</Title> */}
            <div className="form">
                <section className='flex flex-col w-75 gap-5'>
                    <Span variant="primary">Основная информация</Span>
                    <Input name="firstName" type="text"
                        isProtected
                        fieldValue={first_name}
                        labelValue="Ваше имя:"
                        placeholder="Введите ваше имя"/>
                    {/* <Span variant="primary">Ваша фамилия</Span> */}
                    <Input name="lastName" type="text"
                        isProtected
                        fieldValue={last_name}
                        labelValue="Ваша фамилия:"
                        placeholder="Введите вашу фамилию"></Input>
                    {/* <Span variant="primary">Ваш Email</Span> */}
                    <Input name="profession" type="text"
                        isProtected
                        fieldValue={profession}
                        labelValue="Ваша профессия:"
                        placeholder="Введите вашу профессию"></Input>
                    <Textarea name="aboutSelf"
                        isProtected
                        fieldValue={full_desc}
                        labelValue="О себе:"
                        placeholder="Расскажите о себе"></Textarea>
                    
                </section>
                <section className='flex flex-col w-75 gap-5'>
                    <Span variant="primary">Ссылки на социальные профили</Span>
                    <Input name="telegram" type="text"
                        isProtected
                        fieldValue={link_to_telegram}
                        labelValue="Telegram:"
                        placeholder="Профиль telegram"></Input>
                    {/* <Span variant="primary">Ссылка на профиль github</Span> */}
                    <Input name="github" type="text"
                        isProtected
                        fieldValue={link_to_github}
                        labelValue="GitHub:"
                        placeholder="Профиль github"></Input>
                    {/* <Span variant="primary">Ссылка на профиль vk</Span> */}
                    <Input name="vk" type="text"
                        isProtected
                        fieldValue={link_to_vk}
                        labelValue="Vkontakte:"
                        placeholder="Профиль vk"></Input>
                    <Input name="email" type="text"
                        // fieldValue={primary_email}
                        isProtected
                        labelValue="Ваш Email:"
                        variant="disabled" disabled></Input>
                    {/* <Span variant="primary">Ваша профессия</Span> */}

                    {/* <Span variant="primary">О себе</Span> */}
                    
                </section>
                <section className='flex flex-col w-75 gap-5'>
                    <Span variant="primary">Изображения</Span>
                    <Avatar src={`${API_BASE_URL}${avatar}`}
                        changeAvatar={handleAvatar}/>
                    <Wallpaper src={`${API_BASE_URL}${wallpaper}`}
                        changeWallpaper={handleWallpaper}/>
                </section>
            </div>
            <section className="flex flex-row gap-3 justify-end">
                <Link to="/auth/email/"><ActionButton
                    type="button">
                    Изменить Email
                </ActionButton></Link>
                <Link to="/auth/password/"><ActionButton
                    type="button">
                    Изменить пароль
                </ActionButton></Link>
                <ActionButton 
                    type="submit" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Сохранение...' : 'Сохранить'}
                </ActionButton>
            </section>
            
        </form>
    )
}

export default UserProfile
