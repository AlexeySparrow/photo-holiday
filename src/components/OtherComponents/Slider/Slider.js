import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {Pagination, Navigation} from 'swiper/core';
import style from "./Slider.module.scss";

SwiperCore.use([Pagination, Navigation]);

export const Slider = ({items, height}) => {
    return (
        <>
            <Swiper
                pagination={{"type": "progressbar"}}
                navigation={true}
                loop={true}
                className={style.slider}
                style={{height: height}}
            >
                {
                    items.map((item, idx) =>
                        <SwiperSlide key={idx}>
                            <img src={item} alt="slide" loading="lazy"/>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
}
