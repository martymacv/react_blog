import { Link, Form, useActionData, useNavigate } from "react-router-dom"

import ActionButton from "../../components/singles/ActionButton";
import Input from "../../components/singles/Input";
import Title from "../../components/singles/Title";
import { useEffect } from "react";
import { useGlobalState } from "../../components/GlobalProvider";

function LoginForm() {
    const actionData = useActionData();
    const navigate = useNavigate();

    const {
        userId,
        handleUserId,
        handleLogStatus
    } = useGlobalState();

    useEffect(() => {
        if (actionData?.success) {
            handleUserId(actionData.userData.user_id);
            navigate(actionData.redirect);
        }
    }, [actionData, userId, navigate, handleUserId])

    function handleLogin() {
        handleLogStatus("login");
    }
    return (
        <div className="form">
            <Form 
                className="form"
                method="POST"
                action="/auth/login"
                >
                <Title>Вход</Title>
                <Input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                ></Input>
                <Input 
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    required
                ></Input>
                <ActionButton
                    type="submit"
                    onClick={handleLogin}
                    >Войти</ActionButton>
            </Form>
            <section className="section">
                <Link to={'/recovery/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">восстановление</Link>
                <Link to={'/registration/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">регистрация</Link>
            </section>
        </div>
    );
}

export default LoginForm
