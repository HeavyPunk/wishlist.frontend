import React from "react";

export class UserMenu extends React.Component<{isShow: boolean}, any>{
    render() {
        if (!this.props.isShow)
            return <div/>
        return (
            <div className={"dropdown-menu"}>
                <p><a href={"/"}>Профиль</a></p>
                <p><a href={"#"}>Настройки доски</a></p>
                <p><a href={"/"}>Выход</a></p>
            </div>
        )
    }
}