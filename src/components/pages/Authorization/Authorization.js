import React from "react";
import {RegistrationForm} from "./AuthorizationForm";
import {AuthorizationForm} from "./AuthorizationForm";
import s from "./../../styles/Autorization.module.css"

const AuthorizationWindow = () => {
    return (
        <div className={s.body}>
            <Header title={"Авторизация"}/>
            <hr/>
            <div>
                <AuthorizationForm/>
            </div>
        </div>
    );
}

const RegistrationWindow = () => {
    return (
        <div className={s.body}>
            <Header title={"Регистрация"}/>
            <hr/>
            <div>
                <AuthorizationForm/>
            </div>
        </div>
    );
}



const Header = (props) =>{
    return (
        <div className={s.header}>
            <h1> {props.title} </h1>
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