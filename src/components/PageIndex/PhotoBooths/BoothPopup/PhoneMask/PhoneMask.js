import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setPhone} from "../../../../../store/redusers/orderReducer";
import NumberFormat from "react-number-format";


export const PhoneMask = () => {
    let dispatch = useDispatch()

    let phoneValue = useSelector(state => state.order.phone)
    const setValue = useCallback((value) => dispatch(setPhone(value)), [dispatch])

    return (
        <NumberFormat
            format="+7 (###) ###-##-##"
            allowEmptyFormatting mask="_"
            value={phoneValue}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}
