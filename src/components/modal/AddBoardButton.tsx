import React from "react";
import {AddForm} from "../../forms/add_form";
import settings from "../../config/common.json";
import rest_api from "../../config/rest.json";
import styles from "../styles/HeaderWithBoardsList.module.css";
import s from "../styles/Form.module.css"

export class AddBoardButton extends React.Component<{board_id: string, onBoardAdd: () => void}, { isModal: boolean }>{

    constructor(props: any) {
        super(props);
        this.state = {
            isModal: false,
        }
    }

    async sendNewBoard(name: string, text: string) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({Name: name, Description: text})
        };
        let isSuccess: boolean = false
        await fetch(settings.backend_url + rest_api.post_board, requestOptions) //TODO: legacy
            .then(result => isSuccess = result.ok)
            .catch(reason => console.log(reason))
    }

    submit() {
        this.setState({isModal: false})
        let name = (document.getElementById('add-card-form-name-input') as HTMLInputElement).value
        let text = (document.getElementById('add-card-form-text-input') as HTMLInputElement).value
        if (name == null || text == null)
            return;
        this.sendNewBoard(name, text).then(() => this.props.onBoardAdd());
    }


    render() {
        return(
            <div>
                <button className={styles.addBoardButton} onClick={() => this.setState({isModal: true})}>
                    <p className={styles.textaddBoardButton}>Добавить доску</p></button>
                <AddForm
                    visible={this.state.isModal}
                    title='Добавить доску'
                    content={
                        <div className="add-card-form-content">
                            <h4 className={s.textStyle}>Название:</h4>
                            <input name='name' id='add-card-form-name-input'/>
                            <h4 className={s.textStyle}>Описание:</h4>
                            <textarea cols={60} rows={10} name='text' id='add-card-form-text-input'/>
                        </div>
                    }
                    footer={
                        <button className={s.buttonDelete} onClick={
                            () => {this.submit();}
                        }> <p className={s.buttonDeleteText}>
                            Добавить
                        </p>
                        </button>}
                    onClose={() => {
                        this.setState({isModal: false})
                    }}
                />
            </div>
        )
    }
}