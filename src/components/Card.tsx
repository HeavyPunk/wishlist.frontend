import React from "react";
import {Card_props} from "../state/card_props";
import rest_api from "../config/rest.json"
import settings from "../config/common.json"

export class Card extends React.Component<Card_props, any>{

    private offsetX: number = this.props.startOffsetX;
    private offsetY: number = this.props.startOffsetY;
    private maxX: number = this.props.maxX;
    private maxY: number = this.props.maxY;
    private minX: number = this.props.minX;
    private minY: number = this.props.minY;

    updateCardCoords(x_offset: number, y_offset: number){
        console.log(x_offset)
        console.log(y_offset)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({XOffset: x_offset, YOffset: y_offset, CardId: this.props.cardId})
        };
        fetch(settings.backend_url + rest_api.update_card_coords, requestOptions)
            .catch(reason => console.log(reason))
    }

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
        let offsetX = el.getBoundingClientRect().left
        let offsetY = el.getBoundingClientRect().top
        console.log(offsetX)
        console.log(offsetY)
        this.updateCardCoords(this.maxX / offsetX, this.maxY / offsetY);
    }

    render() {
        const style = {
            left: `${this.maxX / this.props.startOffsetX}px`,
            top: `${this.maxY / this.props.startOffsetY}px`,
        };

        let el = (
            <div style={style} className="card unselectable" onMouseDown={this.add} onMouseUp={this.remove}>
                <h2>{this.props.name}</h2>
                <p>{this.props.text}</p>
                <img alt="пикча" className="card-pic" src={this.props.imgUri}/>
            </div>
        );
        return el
    }
}

