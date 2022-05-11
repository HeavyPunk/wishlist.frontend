import React from "react";
import settings from "../../../config/common.json";
import rest_api from "../../../config/rest.json";
import {Requester} from "../../../utils/requester";

export class Boards extends React.Component<any, { boards: [any], isLoaded: boolean, error: any}>{

    constructor(props: any) {
        super(props);
        this.state = {
            boards: [0],
            isLoaded: false,
            error: null
        };
    }

    getBoards(){
        let requestUrl = settings.backend_url + rest_api.get_all_boards;
        console.log(requestUrl)
        fetch(requestUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            isLoaded: true,
                            boards: result
                        });
                    console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: error
                    })
                    console.log(error)
                }
            )
    }

    componentDidMount() {
        this.getBoards();
    }

    Board(props: {boardId: string, boardName: string, boardDescription: string}){
        return (
            <div className={"board-list-board-segment"} style={{width: "50%"}}>
                <div className={"common-text-text"}>
                <a href={"/board/" + props.boardId}>{props.boardName}</a>
                </div>
                <button style={{marginRight: "0"}} onClick={
                    () => Requester.sendRequestJson('DELETE', settings.backend_url + rest_api.delete_board, {BoardId: props.boardId})
                }>Удалить</button>
                <div>
                    <p>{props.boardDescription}</p>
                </div>
            </div>
        )
    }

    render() {
        const {boards} = this.state
        return (
            <div className={"profile-board-list"}>
                <h3 className={"common-text-title"}>Список досок</h3>
                <ul>
                    {boards.map(board => (<this.Board boardId={board.boardId} boardName={board.name} boardDescription={board.description}/>))}
                </ul>
            </div>
        )
    }
}