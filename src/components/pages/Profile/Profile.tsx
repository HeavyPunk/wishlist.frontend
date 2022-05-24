import React from "react";
import {Footer} from "../../Footer";
import {Boards} from "./Boards";
import {ProfileHeader} from "./ProfileHeader";

export class Profile extends React.Component<any, any>{
    render() {
        return (
            <div>
                <ProfileHeader board_id={"null"}/>
                <Boards/>

                {/*<Footer/>*/}
            </div>
        )
    }
}