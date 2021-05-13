import React from "react";
import style from "./Popup.module.scss";

export const Popup = ({children}) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}
