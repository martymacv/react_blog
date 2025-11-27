import { NavLink, useActionData, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Input from "../generals/Input"
import { useGlobalState } from "../GlobalProvider";
import { API_ENDPOINTS } from "../../constants";

function Header() {
    const actionData = useActionData();
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate();

    const {
        userId,
        logStatus
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
        <div className="flex flex-row justify-between items-center p-4 bg-[#0d0d0dff] shadow-header">
            <nav className='header'>
                <ul className="flex flex-row flex-wrap gap-6">
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink>
                            Главное
                        </NavLink>
                    </li>
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink>
                            Обо мне
                        </NavLink>
                    </li>
                    <li className="text-white text-[11px] font-[400] font-roboto uppercase">
                        <NavLink to={API_ENDPOINTS.USERS.PROFILE(localStorage.getItem('auth:userId'))}>
                            Профиль
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
            <NavLink to={`/search${searchParams ? '?' : ''}${searchParams}`} 
                className="text-white text-[11px] font-[400] font-roboto uppercase">
                Поиск
            </NavLink>
        </div>
    )
}

export default Header
