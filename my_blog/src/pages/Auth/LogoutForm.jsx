import { Link, Form, useNavigate } from "react-router-dom";
import Title from "../../components/generals/Title";
import ActionButton from "../../components/generals/ActionButton";
import { useGlobalState } from "../../components/GlobalProvider";

function LogoutForm() {
    const { 
        accessToken,
        logStatus,
        handleAccess,
        handleLogStatus
    } = useGlobalState();

    function handleLotout() {
        handleAccess("");
        handleLogStatus("logout");
        // localStorage.removeItem("auth:access_token");
        console.log(accessToken)
        console.log(logStatus)
        console.log(localStorage.getItem("auth:access_token"))
    }
    return (
        <div className="flex flex-col gap-5 m-12 items-center max-w-70">
            <Form 
                className="flex flex-col gap-5 items-center justify-center w-full"
                method="POST"
                action="/auth/logout"
                >
                <Title>Подтвердите выход</Title>
                <ActionButton
                    type="submit"
                    onClick={handleLotout}
                    >Выйти</ActionButton>
                <Link to="/">
                    <ActionButton
                        type="submit"
                        >Остаться</ActionButton>
                </Link>
            </Form>
        </div>
    );
}

export default LogoutForm
