import React, {useState} from "react";
import {AddForm} from "../forms/add_card_form";
import {UserMenu} from "./UserMenu";
import styles from "./styles/HeaderWithBoardsList.module.css";

export class User extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            showMenu: false
        }
    }


    render() {
        return (
            <div className={styles.userLogo}>
                <img className={styles.userLogoImg} alt="Avatar" onClick={() => {this.setState({showMenu: !this.state.showMenu}); console.log(this.state.showMenu)}} src="https://tlum.ru/uploads/22fa9437434982ea805c89581a59f5487dff254c222261114e9668c829225a9f.jpeg" id="picture"/>
                <UserMenu isShow={this.state.showMenu}/>
            </div>
        )
    }
}
