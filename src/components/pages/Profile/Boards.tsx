import React from "react";
import settings from "../../../config/common.json";
import rest_api from "../../../config/rest.json";
import {Requester} from "../../../utils/requester";
import styles from "../../styles/Boards.module.css";

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
            <div className={styles.boardListItem}>
                <div>
                <a href={"/board/" + props.boardId} className={styles.nameBoardText}>{props.boardName}</a>
                </div>

                <button className={styles.buttonDelete} onClick={
                    () => {
                        Requester.sendRequestJson('DELETE', settings.backend_url + rest_api.delete_board, {BoardId: props.boardId})
                            .then(props.onDeleteBoard);
                    }
                }>
                    <p className={styles.buttonDelete}>Удалить</p></button>

                <div>
                    <p className={styles.boardText}>{props.boardDescription}</p>
                </div>
            </div>
        )
    }

    render() {
        const {boards} = this.props
        return (
            <div className={styles.backBoardsList}>
                <ul>
                    {boards.map(board => (<this.Board boardId={board.boardId} boardName={board.name} boardDescription={board.description} onDeleteBoard={this.props.onDeleteBoard}/>))}
                </ul>
            </div>
        )
    }
}