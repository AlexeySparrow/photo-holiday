import React from "react";
import style from "./Title.module.scss";

export const Title = () => {
    return (
        <div className={style.title}>
            <h1>
                <span>Фото на</span> праздник
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit</span>, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
        </div>
    )
}
