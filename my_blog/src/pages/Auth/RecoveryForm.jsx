import { Link } from "react-router-dom"

import ActionButton from "../../components/singles/ActionButton";
import Input from "../../components/singles/Input";
import Title from "../../components/singles/Title";

function RecoveryForm() {
    return (
        // <div className="flex flex-col gap-5 m-12 items-center max-w-70">
        <div className="form">
            <form className="form">
                <Title>Восставновление</Title>
                <Input 
                    type="email"
                    placeholder="Email"
                ></Input>
                <Link to="/">
                    <ActionButton>Восстановить</ActionButton>
                </Link>
            </form>
            <div className="section">
                <Link to={'/login/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">вход</Link>
                <Link to={'/registration/'} className="font-roboto text-white text-[12px] leading-[100%] font-normal">регистрация</Link>
            </div>
        </div>
    );
}

export default RecoveryForm
