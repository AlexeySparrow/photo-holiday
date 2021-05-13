import React from "react";
import style from "./WhyWe.module.scss";
import {useSelector} from "react-redux";

export const WhyWe = () => {

    const data = useSelector(state => state.main.whyWeData)

    return (
        <div className={style.whyWe}>
            {
                data.map(item =>
                    <div key={item.id}>
                        <span>
                            <img src={item.icon} alt={item.title} loading="lazy"/>
                        </span>
                        <p>{item.title}</p>
                    </div>
                )
            }
        </div>
    )
}
