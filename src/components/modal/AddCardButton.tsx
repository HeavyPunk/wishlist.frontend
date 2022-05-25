import React from "react";
import {AddForm} from "../../forms/add_form";
import settings from "../../config/common.json";
import rest_api from "../../config/rest.json";

export class AddCardButton extends React.Component<{board_id: string}, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            isModal: false,
            canvas: React.Component
        }
    }

    async sendNewCard(name: string, text: string, imgUri: string) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({Name: name, Text: text, ImgUri: imgUri})
        };
        await fetch(settings.backend_url + rest_api.add_card_to_board + this.props.board_id, requestOptions) //TODO: legacy
            .catch(reason => console.log(reason))
    }

    submit(){
        this.setState({isModal: false})
        let name = (document.getElementById('add-card-form-name-input') as HTMLInputElement).value
        let text = (document.getElementById('add-card-form-text-input') as HTMLInputElement).value
        let imgUri = (document.getElementById('add-card-form-img-uri-input') as HTMLInputElement).value
        if (name == null || text == null)
            return;
        this.sendNewCard(name, text, imgUri);

    }

    render() {
        return(
            <div>
                <button className="add-card-btn" onClick={() => this.setState({isModal: true})}>+</button>
                <AddForm
                    visible={this.state.isModal}
                    title='Новая карточка'
                    content={
                        <div className="add-card-form-content">
                            <h4>Название карточки</h4>
                            <input name='name' id='add-card-form-name-input'/>
                            <h4>Описание карточки</h4>
                            <textarea cols={60} rows={10} name='text' id='add-card-form-text-input'/>
                            <h4>Картинка</h4>
                            <input name="img" id="add-card-form-img-uri-input"/>
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
