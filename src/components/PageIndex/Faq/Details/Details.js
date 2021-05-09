import React from "react";
import style from "./Details.module.scss";
import {useSelector} from "react-redux";

export const Details = () => {

    const data = useSelector(state => state.main.faqData)

    return (
        <>
            {
                data.map(item =>
                    <details className={style.details} key={item.id}>
                        <summary>{item.title} №{item.id}</summary>
                        <p>{item.text}</p>
                    </details>
                )
            }
        </>
    )
}
