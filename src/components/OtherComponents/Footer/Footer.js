import React from "react";
import {Contacts} from "./Contacts/Contacts";
import {Map} from "./Map/Map";
import {TitleItem} from "../TitleItem/TitleItem";

export const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <TitleItem title="Контакты" text="Мы всегда доступны для вас"/>
                <Contacts/>
            </div>
            <Map/>
        </footer>
    )
}
