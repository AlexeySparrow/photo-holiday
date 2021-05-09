import React from "react";
import style from "./NewPopup.module.scss";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Slider} from "../../../OtherComponents/Slider/Slider";
import {ButtonBack} from "../../../OtherComponents/ButtonBack/ButtonBack";

export const NewPopup = () => {
    const data = useSelector(state => state.news.newsData)

    let {id} = useParams();
    let item = data[parseInt(id - 1, 10)]

    if (!item) return null;

    return (
        <div className={style.container}>
            {
                <div className={style.popup}>
                    <Slider items={item.gallery}/>
                    <div className={style.popup__text}>
                        <span>
                            <p className="colorTitle">{item.galleryName}</p>
                            <p className="grey">{item.date}</p>
                        </span>
                        <h3>{item.title} №{item.id}</h3>
                        <p>{item.text}</p>
                    </div>
                    <ButtonBack/>
                </div>
            }
        </div>
    )
}
