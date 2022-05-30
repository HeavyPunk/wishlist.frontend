import React, {Component, useEffect} from "react";
import {ModalProps} from "../state/modal_props"
import s from "../components/styles/Form.module.css"

export class AddForm extends Component<ModalProps, any>{
    onKeydown = ({key}: KeyboardEvent) => {
        switch (key){
            case 'Escape':
                this.props.onClose();
                break;
        }
    }

    render() {
        if (!this.props.visible)
            return null;

        return (
            <div className={s.modal} onClick={this.props.onClose}>
                <div className={s.modalDialog} onClick={e => e.stopPropagation()}>
                    <div className={s.modalHeader}>
                        <h3 className={s.modalTitle}>{this.props.title}</h3>
                        <span className={s.modalClose} onClick={this.props.onClose}>&times;</span>
                    </div>

                    <div className={s.modalBody}>
                        <div className={s.modalContent}>{this.props.content}</div>
                    </div>

                    {this.props.footer && <div className={s.modalFooter}>{this.props.footer}</div>}
                </div>
            </div>
        )
    }

}
