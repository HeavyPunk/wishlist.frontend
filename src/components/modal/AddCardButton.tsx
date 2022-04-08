import React from "react";
import {AddCardForm} from "../../forms/add_card_form";
import settings from "../../config/common.json";
import rest_api from "../../config/rest.json";

export class AddCardButton extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            isModal: false
        }
    }

    async sendNewCard(name: string, text: string) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({Name: name, Text: text})
        };
        await fetch(settings.backend_url + rest_api.post_card, requestOptions)
            .catch(reason => console.log(reason))
    }

    submit(){
        this.setState({isModal: false})
        let name = (document.getElementById('add-card-form-name-input') as HTMLInputElement).value
        let text = (document.getElementById('add-card-form-text-input') as HTMLInputElement).value
        if (name == null || text == null)
            return;
        this.sendNewCard(name, text);

    }

    render() {
        return(
            <div className="add-card-button">
                <button onClick={() => this.setState({isModal: true})}>+</button>
                <AddCardForm
                    visible={this.state.isModal}
                    title='Новая карточка'
                    content={
                        <div>
                            <input name='name' id='add-card-form-name-input'/>
                            <input name='text' id='add-card-form-text-input'/>
                        </div>
                    }
                    footer={<button onClick={() => {
                        this.submit();
                    }}>Добавить</button>}
                    onClose={() => {
                        this.setState({isModal: false})
                    }}
                />
            </div>
        )
    }
}
