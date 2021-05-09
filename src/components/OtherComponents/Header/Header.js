import React from "react";
import style from "./Header.module.scss";
import logo from "../../../assets/img/logo.png";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className={style.header}>
            <Link to='/photo-holiday'>
                <img src={logo} alt="logo"/>
            </Link>
        </header>
    )
}
