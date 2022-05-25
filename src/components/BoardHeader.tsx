import React from "react";
import {User} from "./User";
import {AddCardButton} from "./modal/AddCardButton";
import styles from "./styles/HeaderWithBoardsList.module.css"

export class BoardHeader extends React.Component<{board_id: string}, any>{

    render() {
        return(
            <div className={styles.header}>
                <AddCardButton board_id={this.props.board_id}/>
                <div className={styles.textTitlePosition}>
                    <p className={styles.styleTextTitle}> Название доски </p>
                </div>
                <User/>
            </div>
        )
    }
}
