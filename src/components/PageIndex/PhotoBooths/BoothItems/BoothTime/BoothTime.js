import React from "react";
import style from "./BoothTime.module.scss";
import {useSelector} from "react-redux";

export const BoothTime = ({itemId}) => {

    const inputs = useSelector(state => state.booth.boothTime)

    const getTimeValue = (event) => {
        let value = event.target.value
        console.log(value)
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
