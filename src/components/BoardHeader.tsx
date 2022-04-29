import React from "react";
import {User} from "./User";
import {AddCardButton} from "./modal/AddCardButton";

export class BoardHeader extends React.Component<{board_id: string}, any>{

    render() {
        return(
            <div className="header">
                <AddCardButton board_id={this.props.board_id}/>
                <User/>
            </div>
        )
    }
}
