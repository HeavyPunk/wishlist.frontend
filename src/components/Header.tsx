import React from "react";
import {User} from "./User";
import {AddCardButton} from "./modal/AddCardButton";

export class Header extends React.Component<any, any>{

    render() {
        return(
            <div className="header">
                <AddCardButton/>
            </div>
        )
    }
}
