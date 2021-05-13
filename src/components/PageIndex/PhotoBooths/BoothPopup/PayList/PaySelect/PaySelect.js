import React, {useCallback} from "react";
import style from "./PaySelect.module.scss";
import {useDispatch} from "react-redux";
import {setTimeCheckOrder} from "../../../../../../store/redusers/boothReduser";

export const PaySelect = ({item}) => {
    let dispatch = useDispatch()

    const setTime = useCallback((value, dataId, checkId) => dispatch(setTimeCheckOrder(value, dataId, checkId)), [dispatch])

    return (
        <select
            className={style.select}
            value={item.time.filter(item => item.checked === true).map(item => item.value)[0]}
            onChange={(e) =>
                setTime(e.target.value, item.id, item.time.filter(item => item.value === Number(e.target.value))
                    .map(item => item.id)[0])}
        >
            {
                item.time.map(item =>
                    <option value={item.value} key={item.id}>{item.name}</option>
                )
            }
        </select>
    )
}
