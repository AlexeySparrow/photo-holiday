import React, {useCallback, useEffect} from "react";
import style from "./BoothTotal.module.scss";
import {useDispatch} from "react-redux";
import {setSumPrice} from "../../../../../store/redusers/boothReduser";
import {useLocation, Link} from "react-router-dom";

export const BoothTotal = ({item}) => {
    let location = useLocation()
    let dispatch = useDispatch()
    const setSum = useCallback((number, id) => dispatch(setSumPrice(number, id)), [dispatch])

    /* price options */
    let valueOptions = item.options.filter(item => item.check === true).map(item => item.price)
    let sumOptions = (valueOptions.length > 0) ? valueOptions.reduce((a, b) => a + b) : 0

    /* price times */
    let valueTimes = item.time.filter(item => item.checked === true).map(item => item.value)

    /* main price */
    let mainPrice = item.price

    /* total */
    let totalSum = (mainPrice * valueTimes) + sumOptions

    useEffect(() => {
        setSum(totalSum, item.id)
    }, [item.id, setSum, totalSum])

    return (
        <span className={style.boothItem__price}>
            <h2>{!item.sumPrice ? item.price : item.sumPrice} ₽</h2>
            <Link key={item.id} to={{pathname: `/photo-holiday/order/${item.id}`, state: { background: location }}}>
                Оставить заявку
            </Link>
        </span>
    )
}
