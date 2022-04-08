import React, {Component, useEffect} from "react";
import {ModalProps} from "../state/modal_props"

export class AddCardForm extends Component<ModalProps, any>{
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
            <div className='modal' onClick={this.props.onClose}>
                <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <h3 className='modal-title'>{this.props.title}</h3>
                        <span className='modal-close' onClick={this.props.onClose}>&times;</span>
                    </div>
                    <div className='modal-body'>
                        <div className='modal-content'>{this.props.content}</div>
                    </div>
                    {this.props.footer && <div className='modal-footer'>{this.props.footer}</div>}
                </div>
            </div>
        )
    }

}
