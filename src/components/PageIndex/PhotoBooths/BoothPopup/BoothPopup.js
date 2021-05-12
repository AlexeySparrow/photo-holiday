import React from "react";
import style from "./BoothPopup.module.scss";
import {ButtonBack} from "../../../OtherComponents/ButtonBack/ButtonBack";
import {PhoneMask} from "./PhoneMask/PhoneMask";

export const BoothPopup = () => {
    return (
        <div className={style.container}>
            <div className={style.popup}>
                <h2>Ваша заявка</h2>
                <ButtonBack/>

                <PhoneMask/>
                <button>Отправить заявку</button>
            </div>
        </div>
    )
}
