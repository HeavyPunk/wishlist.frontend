import React from "react";
import {AddBoardButton} from "../../modal/AddBoardButton";
import {User} from "../../User";

export class ProfileHeader extends React.Component<{board_id: string}, any>{

    render() {
        return(
            <div className="header">
                <AddBoardButton board_id={this.props.board_id}/>
                <User/>
            </div>
        )
    }
}
