import React, { ReactNode } from "react";
import style from "./Button.module.scss";

export interface IAuthRouteProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export default class Botao extends React.Component<IAuthRouteProps> {
    render(): React.ReactNode {
        return (
            <button onClick={this.props.onClick} className={style.botao} type={this.props.type}>
                {this.props.children}
            </button>
        );
    }
}