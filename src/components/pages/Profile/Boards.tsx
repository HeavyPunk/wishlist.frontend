import React from "react";
import settings from "../../../config/common.json";
import rest_api from "../../../config/rest.json";
import {Requester} from "../../../utils/requester";

export class Boards extends React.Component<{onDeleteBoard: () => void, boards: [{boardId: string, name: string, description: string}]}, {isLoaded: boolean, error: any}>{

    constructor(props: any) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
        };
    }

    Board(props: {boardId: string, boardName: string, boardDescription: string, onDeleteBoard: () => void}){
        return (
            <div className={"board-list-board-segment"} style={{width: "50%"}}>
                <div className={"common-text-text"}>
                <a href={"/board/" + props.boardId}>{props.boardName}</a>
                </div>
                <button style={{marginRight: "0"}} onClick={
                    () => {
                        Requester.sendRequestJson('DELETE', settings.backend_url + rest_api.delete_board, {BoardId: props.boardId})
                            .then(props.onDeleteBoard);
                    }
                }>Удалить</button>
                <div>
                    <p>{props.boardDescription}</p>
                </div>
            </div>
        )
    }

    render() {
        const {boards} = this.props
        return (
            <div className={"profile-board-list"}>
                <h3 className={"common-text-title"}>Список досок</h3>
                <ul>
                    {boards.map(board => (<this.Board boardId={board.boardId} boardName={board.name} boardDescription={board.description} onDeleteBoard={this.props.onDeleteBoard}/>))}
                </ul>
            </div>
        )
    }
}