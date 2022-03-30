import React from "react";
import * as settings from "../config/common.json";
import * as rest_api from "../config/rest.json";
import {CardsState} from "../state/card_state";

import {Card} from "../components/Card"

export class Canvas extends React.Component <any, CardsState>{

    constructor(props : any) {
        super(props);
        this.state = {
            isLoaded: false,
            cards: [0],
            error: null
        };
    }


    componentDidMount(){
        //let requestUrl = settings.backend_url + rest_api.all_cards;
        let requestUrl = "http://127.0.0.1:8080/services/getStatuses"
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

    render(){
        const {cards} = this.state;
        return(
            <div className="Canvas">
                {cards.map(card => (
                    <Card name={card.serviceName ?? "Имя карточки"} text={card.serviceStatus ?? "Text: Ооооочень хочу рюкзак"}/>
                ))}
            </div>
        )
    }

}
