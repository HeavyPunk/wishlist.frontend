import React from "react";
import {Footer} from "../../Footer";
import {Boards} from "./Boards";
import {ProfileHeader} from "./ProfileHeader";
import settings from "../../../config/common.json";
import rest_api from "../../../config/rest.json";

export class Profile extends React.Component<any, {boards: [{boardId: string, name: string, description: string}], isLoaded: boolean, error: any}>{

    constructor(e: any) {
        super(e);
        this.state = {
            boards: [{boardId: "0", description: "1", name: "j"}],
            isLoaded: false,
            error: null,
        }
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
        console.log(this.state.boards)
    }

    render() {
        return (
            <div>
                <ProfileHeader board_id={"null"} onBoardAdd={this.getBoards.bind(this)}/>
                <Boards boards={this.state.boards} onDeleteBoard={this.getBoards.bind(this)}/>
                <Footer/>
            </div>
        )
    }
}