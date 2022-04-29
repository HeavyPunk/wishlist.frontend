import React, {useRef} from "react";
import settings from "../config/common.json";
import rest_api from "../config/rest.json";
import {CardsState} from "../state/card_state";

import {Card} from "../components/Card"

export class Canvas extends React.Component <{board_id: string}, CardsState>{

    constructor(props : any) {
        super(props);
        this.state = {
            isLoaded: false,
            cards: [0],
            error: null
        };
    }

    getCards(){
        let requestUrl = settings.backend_url + rest_api.get_board_cards + this.props.board_id; //TODO: legacy
        fetch(requestUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState(
                        {
                            isLoaded: true,
                            cards: result
                        })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    componentDidMount(){
        this.getCards();
    }


    render(){
        const {cards} = this.state;
        return(
            <div className="canvas" onClick={this.getCards}>
                {cards.map(card => (
                    <Card startOffsetX={card.xOffset} startOffsetY={card.yOffset} key = {card.id} cardId={card.cardId} minX={10} minY={40} maxX={1100} maxY={500} name={card.name ?? "Имя карточки"} text={card.text ?? "Text: Ооооочень хочу рюкзак"} imgUri={card.imgUri}/>
                ))}
            </div>
        )
    }

}
