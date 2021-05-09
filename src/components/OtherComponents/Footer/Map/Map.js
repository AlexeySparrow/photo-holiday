import React from "react";
import style from "./Map.module.scss";

export const Map = () => {
    return (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.87073405098!2d37.73297931582519!3d55.673
            84798053239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab442a98eeeeb%3A0x1e24ffd86456122a!2z
            0L_RgC4g0JXQs9C-0YDRjNC10LLRgdC60LjQuSwgMtCQINGB0YLRgNC-0LXQvdC40LUgMTAsINCc0L7RgdC60LLQsCwgMTA5Mzgy!5e0
            !3m2!1sru!2sru!4v1620473200590!5m2!1sru!2sru"
            allowFullScreen=""
            loading="lazy"
            className={style.map}
        />
    )
}
