import React from "react";
import s from "./../styles/Autorization.module.css"

const AuthorizationWindow = () => {
    return (
        <div className={s.body}>
            <HeaderAutorization/>
            <hr/>
            <div>
                <Login/>
                <Password/>
            </div>
            <Enter/>
        </div>
    );
}

const HeaderAutorization = () => {
    return (
        <div>
            <h1> Авторизация </h1>
        </div>
    );
}

const Login = () => {
    return (
        <div>
            Login
        </div>
    );
}

const Password = () => {
    return (
        <div>
            Password
        </div>
    );
}

const Enter = () => {
    return (
        <div>
            <a href={"/profile"}>
                <button> Кнопка входа</button>
            </a>
        </div>
    );
}

export default AuthorizationWindow;