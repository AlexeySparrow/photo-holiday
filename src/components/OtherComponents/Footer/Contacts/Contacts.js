import React from "react";
import style from "./Contacts.module.scss";
import phoneImg from "../../../../assets/img/svg/phone.svg";
import addressImg from "../../../../assets/img/svg/map.svg";

export const Contacts = () => {
    return (
        <>
            <div className={style.contact}>
                <img src={phoneImg} alt="phone" loading="lazy"/>
                <div>
                    <p>Телефон</p>
                    <a href="tel:74951234567">+7 495 123 45 67</a>
                </div>
            </div>
            <div className={style.contact}>
                <img src={addressImg} alt="address" loading="lazy"/>
                <div>
                    <p>Адрес</p>
                    <a href="https://goo.gl/maps/9npRD3wYyYqh76N47" target="_blank" rel="noreferrer">
                        109382, Москва, пр. Егорьевский, д.2а, стр.10 въезд на машине только с улицы Люблинская
                    </a>
                </div>
            </div>
            <div className={style.contact}>
                <img alt="" loading="lazy"/>
                <div>
                    <p>Почта</p>
                    <a href="mailto:Info@test.ru">Info@test.ru</a>
                </div>
            </div>
        </>
    )
}
