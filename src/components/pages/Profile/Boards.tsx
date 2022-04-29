import React from "react";
import settings from "../../../config/common.json";
import rest_api from "../../../config/rest.json";

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

    render() {
        const {boards} = this.state
        return (
            <div className={"profile-board-list"}>
                <ul>
                    {boards.map(board => (<li><a href={"/board/" + board.boardId}>{board.name}</a></li>))}
                </ul>
            </div>
        )
    }
}