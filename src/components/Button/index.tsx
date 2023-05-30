import React, { PropsWithChildren } from "react";
import style from "./Button.module.scss";

export interface IAuthRouteProps extends PropsWithChildren {}

export default class Botao extends React.Component<IAuthRouteProps> {
    render(): React.ReactNode {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        );
    }
}