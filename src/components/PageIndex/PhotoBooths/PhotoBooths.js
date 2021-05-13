import React from "react";
import "./PhotoBooths.scss";
import {TitleItem} from "../../OtherComponents/TitleItem/TitleItem";
import {SortBooth} from "./SortBooth/SortBooth";
import {BoothItems} from "./BoothItems/BoothItems";
import {Popup} from "../../OtherComponents/Popup/Popup";
import {BoothPopup} from "./BoothPopup/BoothPopup";
import {Route, useLocation} from "react-router-dom";

export const PhotoBooths = () => {

    let location = useLocation()
    let background = location.state && location.state.background

    return (
        <div className='booth'>
            <div className="container">
                <TitleItem title="Фотобудки" text=""/>
                <SortBooth />
            </div>
            <BoothItems />

            {background && <Route path="/photo-holiday/order/:id" children={
                <Popup>
                    <BoothPopup/>
                </Popup>
            }/>}
        </div>
    )
}
