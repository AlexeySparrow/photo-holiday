import React from "react";
import style from "./BoothOptions.module.scss";

import img from '../../../../../assets/img/video.jpg'

export const BoothOptions = ({data, itemId}) => {
    return (
        <>
            <span className={style.options__title}>
                <p className='colorTitle'>Доп. опции</p>
                <p className='colorTitle'>Отметить все</p>
            </span>
            <div className={style.options__box}>
                {
                    data.map(item =>
                        <div className={style.options__item} key={item.id}>
                            <img src={item.img} alt="img"/>
                            <div className={style.options__itemTitle}>
                                <p>{item.title} №{item.id}</p>
                                <p className="colorTitle">от {item.price} ₽</p>
                            </div>
                            <div className={style.options__inputCheckbox}>
                                <input type="checkbox" id={"check" + item.id + itemId}/>
                                <label htmlFor={"check" + item.id + itemId}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
