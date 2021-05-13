import React from "react";
import style from "./PayList.module.scss";
import {PaySelect} from "./PaySelect/PaySelect";
import {PayTitle} from "./PayTitle/PayTitle";

export const PayList = ({item}) => {
    return (
        <>
            <PayTitle item={item}/>
            <PaySelect item={item}/>

            <div className={style.list}>
                {
                    item.options.filter(item => item.check === true).map(item =>
                        <span key={item.id}>
                            <p>{item.title} №{item.id}</p>
                            <p>{item.price} ₽</p>
                        </span>
                    )
                }
            </div>
        </>
    )
}
