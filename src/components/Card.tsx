import React from "react";
import {Card_props} from "../state/card_props";

export class Card extends React.Component<Card_props, any>{
    onTouch = (e: any) => {
        const parent = e.target.parentNode.getBoundingClientRect();
        const element = e.target.getBoundingClientRect();



    }

    private offsetX: number = 0;
    private offsetY: number = 0;

    move = (e: any) =>{
        const el = e.target;
        el.style.left = `${e.pageX - this.offsetX}px`;
        el.style.top = `${e.pageY - this.offsetY}px`;
    }

    add = (e: any) => {
        let el = e.target;
        this.offsetX = e.clientX - el.getBoundingClientRect().left;
        this.offsetY = e.clientY - el.getBoundingClientRect().top;
        el.addEventListener('mousemove', this.move);
    }

    remove = (e: any) => {
        let el = e.target;
        el.removeEventListener('mousemove', this.move);
    }

    render() {
        let el = (
            <div className="Card" onMouseDown={this.add} onMouseUp={this.remove}>
                <h2>{this.props.name}</h2>
                <p>{this.props.text}</p>
            </div>
        );
        return el
    }
}

