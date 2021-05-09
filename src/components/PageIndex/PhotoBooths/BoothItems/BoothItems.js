import React, {useCallback} from "react";
import style from "./BoothItems.module.scss";
import {ShowMore} from "../../../OtherComponents/ShowMore/ShowMore";
import {Slider} from "../../../OtherComponents/Slider/Slider";
import {BoothOptions} from "./BoothOptions/BoothOptions";
import {BoothTime} from "./BoothTime/BoothTime";
import {useDispatch, useSelector} from "react-redux";
import {setBoothVisible} from "../../../../store/redusers/boothReduser";

export const BoothItems = () => {
    const dispatch = useDispatch()

    const data = useSelector(state => state.booth.boothData)

    const setVisible = useCallback((number) => dispatch(setBoothVisible(number)), [dispatch])
    const visible = useSelector(state => state.booth.boothVisible)
    const add = useSelector(state => state.booth.addItems)

    return (
        <>
            {
                data.map(item =>
                    <div className={style.boothItem} key={item.id}>
                        <Slider items={item.gallery} height='30%'/>
                        <h4>{item.title} №{item.id}</h4>
                        <span className={style.boothItem__size}>
                            <p>Размер:</p>
                            <p className='grey'>{item.size}</p>
                        </span>
                        <BoothOptions data={item.options} itemId={item.id}/>
                        <BoothTime itemId={item.id}/>
                        <span className={style.boothItem__price}>
                            <h2>{item.price} ₽</h2>
                            <button>Оставить заявку</button>
                        </span>
                    </div>
                ).slice(0, visible)
            }
            <div className="container">
                <ShowMore
                    visible={visible}
                    data={data}
                    add={add}
                    setItem={setVisible}
                />
            </div>
        </>
    )
}
