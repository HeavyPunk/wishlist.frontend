import React from "react";
import {BoardHeader} from "../BoardHeader";
import {Canvas} from "../Canvas";
import {Footer} from "../Footer";
import {useParams} from "react-router-dom";
import {stringify} from "querystring";

export function Board(){
    const params = useParams()
    return (
        <header className="App-header">
            <BoardHeader board_id={params.board_id ?? "null"}/>
            <Canvas board_id={params.board_id ?? "null"}/>
            {/*<Footer/>*/}
        </header>
    )

}