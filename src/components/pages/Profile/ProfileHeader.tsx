import React from "react";
import {AddBoardButton} from "../../modal/AddBoardButton";
import {User} from "../../User";
import styles from "./../../styles/HeaderWithBoardsList.module.css"

export class ProfileHeader extends React.Component<{board_id: string, onBoardAdd: any}, any>{

    render() {
        return(
            <div className={styles.header}>
                <AddBoardButton board_id={this.props.board_id}/>

                <div className={styles.textTitlePosition}>
                    <p className={styles.styleTextTitle}> Список досок </p>
                </div>
                <User/>
            </div>
        )
    }
}
