import React, {useCallback} from "react";
import style from "./BoothTime.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setSumPrice} from "../../../../../store/redusers/boothReduser";

export const BoothTime = ({itemId, price}) => {
    const dispatch = useDispatch()

    const inputs = useSelector(state => state.booth.boothTime)
    const setSum = useCallback((number, id) => dispatch(setSumPrice(number, id)), [dispatch])

    const getTimeValue = (event) => {
        let value = event.target.value * price

        setSum([{time: value}], itemId)
    }

    return (
        <>
            <p className="lightGrey">Укажите время аренды</p>
            <div className={style.boothTime}>
                {
                    inputs.map(i =>
                        <div key={i.id}>
                            <input
                                type="radio"
                                id={"time" + i.id + itemId}
                                name={"time" + itemId}
                                value={i.value}
                                onChange={getTimeValue}
                            />
                            <label
                                htmlFor={'time' + i.id + itemId}
                                key={i.id}>{i.name}
                            </label>
                        </div>
                    )
                }
            </div>
        </>
    )
}
