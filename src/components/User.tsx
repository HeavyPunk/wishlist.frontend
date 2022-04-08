import React, {useState} from "react";
import {AddCardForm} from "../forms/add_card_form";

export class User extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            isModal: false
        }
    }

    render() {
        return (
            <div className="user-logo">
                <img src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" id="picture"/>
                <button onClick={() => this.setState({isModal: true})}>Клик-клик-клик</button>
                <AddCardForm
                    visible={this.state.isModal}
                    title='Заголовок'
                    content={<p>Что-то важное</p>}
                    footer={<button onClick={() => this.setState({isModal: false})}>Закрыть</button>}
                    onClose={() => this.setState({isModal: false})}
                />
            </div>
        )
    }
}
