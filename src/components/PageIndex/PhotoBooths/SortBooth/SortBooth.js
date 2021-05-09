import React, {useCallback, useEffect} from "react";
import style from "./SortBooth.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setBoothData, setSortValue} from "../../../../store/redusers/boothReduser";

export const SortBooth = () => {
    const dispatch = useDispatch()

    /* getting select value */
    const value = useSelector(state => state.booth.sortValue)
    const getValue = useCallback((e) => dispatch(setSortValue(e)), [dispatch])

    const handleChange = (event) => {
        getValue(event.target.value)
    }

    /* sort array booth data */

    const data = useSelector(state => state.booth.boothData)
    const setData = useCallback((newData) => dispatch(setBoothData(newData)), [dispatch])

    useEffect(() => {
        let copyData = data.concat()

        let sortData = (valueSelect) => {
            // eslint-disable-next-line default-case
            switch (valueSelect) {
                case 'up' :
                    return copyData.sort((a, b) => a.price - b.price)
                case 'down' :
                    return copyData.sort((a, b) => b.price - a.price)
            }
        }
        sortData(value)

        setData(copyData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <div className={style.sort}>
            <p>Сортировка:</p>
            <select onChange={handleChange} value={value}>
                <option disabled value="default">По умолчанию</option>
                <option value="up">по возрастанию</option>
                <option value="down">по убыванию</option>
            </select>
        </div>
    )
}
