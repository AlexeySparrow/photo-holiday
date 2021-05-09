import React from "react";
import style from "./Faq.module.scss";
import {Details} from "./Details/Details";
import {TitleItem} from "../../OtherComponents/TitleItem/TitleItem";

export const Faq = () => {
    return (
        <div className={style.faq}>
            <TitleItem title="FAQ" text="Почему выбирают нас?"/>
            <Details/>
        </div>
    )
}
