import React, {useCallback} from "react";
import style from "./BoothTime.module.scss";
import {useDispatch} from "react-redux";
import {setTimeCheck} from "../../../../../store/redusers/boothReduser";

export const BoothTime = ({data ,itemId}) => {
    const dispatch = useDispatch()

    const timeCheck = useCallback((check, dataId, checkId) =>
        dispatch(setTimeCheck(check, dataId, checkId)),[dispatch])

    return (
        <>
            <p className="lightGrey">Укажите время аренды</p>
            <div className={style.boothTime}>
                {
                    data.map(i =>
                        <div key={i.id}>
                            <input
                                type="radio"
                                id={"time" + i.id + itemId}
                                name={"time" + itemId}
                                onChange={(e) => timeCheck(e.target.checked, itemId, i.id)}
                                checked={i.checked}
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
