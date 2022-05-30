import React from "react";
import styles from "./styles/HeaderWithBoardsList.module.css"


export class UserMenu extends React.Component<{isShow: boolean}, any>{
    render() {
        if (!this.props.isShow)
            return <div/>
        return (
            <div className={styles.nav}>
                <p className={styles.navText}><a href={"/profile"}>Доски</a></p>
                <hr className={styles.hrStyle}></hr>
                <p className={styles.navText}><a href={"#"}>Настройки</a></p>
                <hr className={styles.hrStyle}></hr>
                <p className={styles.navText}><a href={"/"}>Выход</a></p>
            </div>
        )
    }
}