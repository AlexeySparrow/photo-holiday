import React from "react";
import style from "./Video.module.scss";
import videoImg from "../../../assets/img/video.jpg";
import playImg from "../../../assets/img/svg/play.svg";
import donutImg from "../../../assets/img/donut.png";
import dotsImg from "../../../assets/img/many-circles.png";
import {Link, Route, useLocation} from "react-router-dom";
import {VideoPopup} from "./VideoPopup/VideoPopup";

export const Video = () => {

    let location = useLocation();
    let background = location.state && location.state.background;

    return (
        <div className={style.video}>
            <Link to={{pathname: `/photo-holiday/video`, state: { background: location }}}>
                <img src={videoImg} alt="video"/>
                <span>
                    <img src={playImg} alt="play"/>
                </span>
            </Link>
            <img src={donutImg} alt="o" className={style.video__donut}/>
            <img src={dotsImg} alt="." className={style.video__dots}/>
            {background && <Route path="/photo-holiday/video" children={<VideoPopup/>}/>}
        </div>
    )
}
