import React from "react";
import style from "./News.module.scss";
import {TitleItem} from "../../OtherComponents/TitleItem/TitleItem";
import {New} from "./New/New";
import {Route, useLocation} from "react-router-dom";
import {NewPopup} from "./NewPopup/NewPopup";

export const News = () => {

    let location = useLocation()
    let background = location.state && location.state.background

    /* off scroll in open modal window */
    background ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

    return (
        <div className={style.news}>
            <TitleItem title="Новости" text="Почему выбирают нас?"/>
            <New/>
            {background && <Route path="/photo-holiday/news/:id" children={<NewPopup/>}/>}
        </div>
    )
}
