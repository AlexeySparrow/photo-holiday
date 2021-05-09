import React from "react";
import style from "./ButtonBack.module.scss";
import img from "../../../assets/img/svg/back.svg";
import {useHistory} from "react-router-dom";

export const ButtonBack = () => {

    let history = useHistory();

    let back = (e) => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div className={style.button} onClick={back}>
            <img src={img} alt="X"/>
        </div>
    )
}
