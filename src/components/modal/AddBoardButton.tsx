import React from "react";
import {AddForm} from "../../forms/add_card_form";
import settings from "../../config/common.json";
import rest_api from "../../config/rest.json";

export class AddBoardButton extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            isModal: false,
        }
    }

    async sendNewCard(name: string, text: string) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({Name: name, Description: text})
        };
        await fetch(settings.backend_url + rest_api.post_board, requestOptions) //TODO: legacy
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
            <div>
                <button className="add-card-btn" onClick={() => this.setState({isModal: true})}>+</button>
                <AddForm
                    visible={this.state.isModal}
                    title='Новая доска'
                    content={
                        <div className="add-card-form-content">
                            <h4>Название доски</h4>
                            <input name='name' id='add-card-form-name-input'/>
                            <h4>Описание доски</h4>
                            <textarea cols={60} rows={10} name='text' id='add-card-form-text-input'/>
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
