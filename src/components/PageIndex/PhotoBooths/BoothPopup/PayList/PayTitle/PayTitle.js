import React from "react";
import style from "./PayTitle.module.scss";

export const PayTitle = ({item}) => {
    return (
        <div className={style.title}>
            <div>
                <p>{item.title} №{item.id}</p>
                <span>
                        <p>Размер:</p>
                        <p className='grey'>{item.size}</p>
                    </span>
            </div>
            <p>{item.price * item.time.filter(item => item.checked === true).map(item => item.value)} ₽</p>
        </div>
    )
}
