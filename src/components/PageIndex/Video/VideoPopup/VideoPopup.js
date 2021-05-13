import React from "react";
import style from "./VideoPopup.module.scss";
import {ButtonBack} from "../../../OtherComponents/ButtonBack/ButtonBack";

export const VideoPopup = () => {
    return (
        <div className={style.video__youtube}>
            <iframe src="https://www.youtube.com/embed/bCDjHVhgDDQ"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
            <ButtonBack/>
        </div>
    )
}
