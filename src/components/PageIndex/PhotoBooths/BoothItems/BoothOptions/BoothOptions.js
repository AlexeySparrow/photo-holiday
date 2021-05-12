import React, {useCallback, useEffect} from "react";
import style from "./BoothOptions.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setCheckOption, setSumPrice} from "../../../../../store/redusers/boothReduser";

export const BoothOptions = ({data, itemId, sum}) => {
    const dispatch = useDispatch()

    /* toggle checked checkbox */
    const toggleChecked =
        useCallback((check, idData, idCheck) => dispatch(setCheckOption(check, idData, idCheck)), [dispatch])

    /* add option in sumPrice */
    const setSum = useCallback((number, id) => dispatch(setSumPrice(number, id)), [dispatch])

    useEffect(() => {
        const filterItemCheck = () => {
            let a = data.filter(item => item.check === true).map(item => item.price)
            let total = (a.length > 0) ? a.reduce((a, b) => a + b) : 0

            setSum([{option: total}], itemId)
        }

        filterItemCheck()
    }, [data, itemId, setSum])

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
                            <img src={item.img} alt="img"/>
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
