import React, {ReactPropTypes} from "react";
import {BoardHeader} from "../BoardHeader";
import {Canvas} from "../Canvas";
import {Footer} from "../Footer";
import {useParams} from "react-router-dom";

export function Board1(){
    const params = useParams()
    return (
        <header className="App-header">
            <BoardHeader board_id={params.board_id ?? "null"}/>
            <Canvas board_id={params.board_id ?? "null"}/>
            <p>{params.board_id}</p>
            <Footer/>
        </header>
    )
}

export class Board extends React.Component<any, any>{
    render(){
        return (
            <header className="App-header">
                <BoardHeader board_id={this.props.match.params.board_id ?? "null"}/>
                <Canvas board_id={this.props.match.params.board_id ?? "null"}/>
                <p>{this.props.match.params.board_id}</p>
                <Footer/>
            </header>
        )
    }
}

