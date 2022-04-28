import React from "react";
import {Header} from "../Header";
import {Canvas} from "../Canvas";
import {Footer} from "../Footer";

export class Board extends React.Component<{board_id: string}, any>{
    render() {
        return (
            <header className="App-header">
                <Header/>
                <Canvas/>
                <Footer/>
            </header>
        )
    }
}