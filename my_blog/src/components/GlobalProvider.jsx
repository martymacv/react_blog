import { createContext, useContext, useState } from "react"

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const isLogin = localStorage.getItem("auth:access_token") ? "login" : "logout"
    const [userId, setUserId] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [logStatus, setLogStatus] = useState(isLogin);
    const [updatedProfile, setUpdatedProfile] = useState(0);

    function handleUserId(id) {
        setUserId(id);
    }

    async function handleAccess(token) {
        setAccessToken(token);
    }
    function handleLogStatus(status) {
        setLogStatus(status);
    }
    return (
        <GlobalContext.Provider
            value={{
                accessToken, logStatus, userId, updatedProfile,
                handleAccess, handleLogStatus, handleUserId, setUpdatedProfile
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;

export function useGlobalState() {
    const context = useContext(GlobalContext);
    return context;
}