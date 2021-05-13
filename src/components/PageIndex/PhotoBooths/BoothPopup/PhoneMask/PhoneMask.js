import React, {useCallback} from "react";
import style from "./PhoneMask.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setPhone, setSelectValue} from "../../../../../store/redusers/orderReducer";
import NumberFormat from "react-number-format";


export const PhoneMask = () => {
    let dispatch = useDispatch()


    const phoneValue = useSelector(state => state.order.phone)
    const setValue = useCallback((value) => dispatch(setPhone(value)), [dispatch])

    const selectValue = useSelector(state => state.order.selectValue)
    const setSelect = useCallback((value) => dispatch(setSelectValue(value)), [dispatch])

    return (
        <div className={style.mask}>
            <NumberFormat
                format="+7 (###) ###-##-##"
                allowEmptyFormatting mask="-"
                value={phoneValue}
                onChange={(e) => setValue(e.target.value)}
            />
            <select value={selectValue} onChange={(e) => setSelect(e.target.value)}>
                <option value="yes">Позвоните мне</option>
                <option value="no">Не звоните мне</option>
            </select>
        </div>
    )
}
