import { NavLink, useActionData, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Input from "../singles/Input"
import { useGlobalState } from "../GlobalProvider";
import { LINKS } from "../../constants";
import { ROUTES } from "../../constants";

function Header() {
    const actionData = useActionData();
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location)

    const {
        userId,
        logStatus,
        selectedPost
    } = useGlobalState();
    // const hasToken = localStorage.getItem('refresh_token')
    
    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         // e.preventDefault();
    //         const query = e.target.value.trim();
    //         if (query) {
    //             navigate(`/search?q=${encodeURIComponent(query)}`);
    //         }
    //     }
    // };
    const [ isLogin, setIsLogin ] = useState(logStatus);

    useEffect(() => {
        setIsLogin(logStatus);
    }, [logStatus])

    // function handleClick() {
    //     // setIsLogin(localStorage.getItem('auth:refresh_token'));
    //     navigate("/auth/logout")
    // }

    // const location = useLocation()

    // function handleClick(event) {
    //     if (location.pathname === '/search') {
    //         event.preventDefault();
    //         window.location.reload();
    //     }
    // }

    return (
        <div className="flex flex-row justify-between items-center p-4 bg-[#0d0d0dff] shadow-header rounded-[12px]">
            <nav className='header'>
                <ul className="flex flex-row flex-wrap gap-6 justify-center items-center">
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink to='/'>
                            Главная
                        </NavLink>
                    </li>
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink to={LINKS.PROFILES.DETAIL(localStorage.getItem('auth:userId'))}>
                            Мой Профиль
                        </NavLink>
                    </li>
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink to='//'>
                            Подписки
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <ul className="flex flex-row flex-wrap gap-6 justify-center items-center">
                {/\/post\/[/d]*/.test(location.pathname) &&
                    <li className="text-white text-[14px] font-[900] font-roboto uppercase">
                        {`${selectedPost.title.length > 20 ? `${selectedPost.title.slice(0, 10)}...` : selectedPost.title}`}
                    </li>
                }
            </ul>
            <nav className='header'>
                <ul className="flex flex-row flex-wrap gap-6 justify-center items-center">
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink to={ROUTES.POSTS.EDITOR}>
                            Создать статью
                        </NavLink>
                    </li>
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink to={`/search${searchParams ? '?' : ''}${searchParams}`} 
                        // className="text-white text-[11px] font-[400] font-roboto uppercase"
                            >
                            Найти
                        </NavLink>
                    </li>
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        {isLogin == "logout" ? (
                            <NavLink 
                                to={"/login"}>
                                Войти
                            </NavLink>
                        ) : (
                            <NavLink to="/auth/logout">Выйти</NavLink>
                        )}
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Header
