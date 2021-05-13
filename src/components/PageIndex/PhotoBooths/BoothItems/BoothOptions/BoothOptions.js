import React, {useCallback} from "react";
import style from "./BoothOptions.module.scss";
import {useDispatch} from "react-redux";
import {setCheckOption} from "../../../../../store/redusers/boothReduser";

export const BoothOptions = ({data, itemId}) => {
    const dispatch = useDispatch()

    /* toggle checked checkbox */
    const toggleChecked =
        useCallback((check, idData, idCheck) => dispatch(setCheckOption(check, idData, idCheck)), [dispatch])

    /* toggle checkbox */

    const getOptionsValue = (event, id) => {
        toggleChecked(event, itemId, id)
    }

    return (
        <>
            <span className={style.options__title}>
                <p className='colorTitle'>Доп. опции</p>
            </span>
            <div className={style.options__box}>
                {
                    data.map(item =>
                        <div className={style.options__item} key={item.id}>
                            <img src={item.img} alt="img" loading="lazy"/>
                            <div className={style.options__itemTitle}>
                                <p>{item.title} №{item.id}</p>
                                <p className="colorTitle">{item.price} ₽</p>
                            </div>
                            <div className={style.options__inputCheckbox}>
                                <input
                                    type="checkbox"
                                    id={"check" + item.id + itemId}
                                    checked={item.check}
                                    onChange={(event, id) =>
                                        getOptionsValue(event.target.checked, item.id)}
                                />
                                <label htmlFor={"check" + item.id + itemId}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
