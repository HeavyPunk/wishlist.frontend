import React from "react";
import {User} from "./User";

export class Header extends React.Component<any, any>{
    render() {
        return(
            <div className="Header">
                <User/>
            </div>
        )
    }
}
