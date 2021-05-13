import React from "react";
import style from "./Header.module.scss";
import logo from "../../../assets/img/logo.png";

export const Header = () => {
    return (
        <div className='container'>
            <header className={style.header}>
                <img src={logo} alt="logo" loading="lazy"/>
            </header>
        </div>
    )
}
