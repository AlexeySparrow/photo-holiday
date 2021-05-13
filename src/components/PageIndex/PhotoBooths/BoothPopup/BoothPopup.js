import React from "react";
import style from "./BoothPopup.module.scss";
import {ButtonBack} from "../../../OtherComponents/ButtonBack/ButtonBack";
import {PhoneMask} from "./PhoneMask/PhoneMask";
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {PayList} from "./PayList/PayList";

export const BoothPopup = () => {

    const data = useSelector(state => state.booth.boothData)

    let {id} = useParams();
    let item = data[parseInt(id - 1, 10)]

    if (!item) return null;

    return (
        <div className={style.popup}>
            <h2>Ваша заявка</h2>
            <ButtonBack/>
            <PayList item={item} />
            <div className={style.totalPrice}>
                <h4>Итого:</h4>
                <h2>{!item.sumPrice ? item.price : item.sumPrice} ₽</h2>
            </div>
            <PhoneMask/>
            <Link to="/photo-holiday/">Отправить заявку</Link>
        </div>
    )
}
