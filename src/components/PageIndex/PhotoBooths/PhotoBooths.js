import React from "react";
import "./PhotoBooths.scss";
import {TitleItem} from "../../OtherComponents/TitleItem/TitleItem";
import {SortBooth} from "./SortBooth/SortBooth";
import {BoothItems} from "./BoothItems/BoothItems";

export const PhotoBooths = () => {
    return (
        <div className='booth'>
            <div className="container">
                <TitleItem title="Фотобудки" text=""/>
                <SortBooth />
            </div>
            <BoothItems />
        </div>
    )
}
