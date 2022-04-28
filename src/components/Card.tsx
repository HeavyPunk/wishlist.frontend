import React from "react";
import {Card_props} from "../state/card_props";

export class Card extends React.Component<Card_props, any>{

    private offsetX: number = 0;
    private offsetY: number = 0;
    private maxX: number = this.props.maxX;
    private maxY: number = this.props.maxY;
    private minX: number = this.props.minX;
    private minY: number = this.props.minY;

    move = (e: any) =>{
        const el = e.target;
        let newX = e.pageX - this.offsetX;
        let newY = e.pageY - this.offsetY;

        if (newX < this.maxX
            && newX > this.minX
            && newY < this.maxY
            && newY > this.minY
        ) {
            el.style.left = `${e.pageX - this.offsetX}px`;
            el.style.top = `${e.pageY - this.offsetY}px`;
        }
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
            <div className="card unselectable" onMouseDown={this.add} onMouseUp={this.remove}>
                <h2>{this.props.name}</h2>
                <p>{this.props.text}</p>
                <img alt="пикча" className="card-pic" src={this.props.imgUri}/>
            </div>
        );
        return el
    }
}

