import { Link, Form } from "react-router-dom";
import Title from "../../components/singles/Title";
import ActionButton from "../../components/singles/ActionButton";
import { useGlobalState } from "../../components/GlobalProvider";

function LogoutForm() {
    const {
        handleUserId,
        handleAccess,
        handleLogStatus,
        setProfileStatus
    } = useGlobalState();

    function handleLotout() {
        handleAccess("");
        handleLogStatus("logout");
        handleUserId(null);
        setProfileStatus('old');
    }
    return (
        <div className="form">
            <Form 
                className="form"
                method="POST"
                action="/auth/logout"
                >
                <Title>Подтвердите выход</Title>
                <section className="section">
                    <ActionButton
                        type="submit"
                        onClick={handleLotout}
                        >Выйти</ActionButton>
                    <Link to="/">
                        <ActionButton
                            type="submit"
                            >Остаться</ActionButton>
                    </Link>
                </section>
            </Form>
        </div>
    );
}

export default LogoutForm
