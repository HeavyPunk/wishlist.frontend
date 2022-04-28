import React from "react";

export class UserMenu extends React.Component<{isShow: boolean}, any>{
    render() {
        if (!this.props.isShow)
            return <div/>
        return (
            <div className={"dropdown-menu"}>
                <ul>
                    <li><a href={"/profile"}>Профиль</a></li>
                    <li><a href={"#"}>Настройки доски</a></li>
                    <li><a href={"/"}>Выход</a></li>
                </ul>
            </div>
        )
    }
}