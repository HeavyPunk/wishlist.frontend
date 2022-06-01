import React from "react";
import styles from "../../styles/HeaderWithBoardsList.module.css";
import {AddForm} from "../../../forms/add_form";
import s from "./../../styles/Autorization.module.css"

export class AuthorizationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className={s.form}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" placeholder="Логин" value={this.state.value} onChange={this.handleChange}/>
                        <input type="text" placeholder="Пароль" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <div></div>
                    <a href={"/profile"}>
                        <button className={s.formButton}>Войти</button>
                    </a>
                </form>
            </div>
        );
    }
}

export class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className={s.form}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" placeholder="Логин" value={this.state.value} onChange={this.handleChange}/>
                        <input type="text" placeholder="Пароль" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <div></div>

                    <a href={"/"}>
                        <button>Зарегистрироваться</button>
                    </a>
                </form>
            </div>
        );
    }
}