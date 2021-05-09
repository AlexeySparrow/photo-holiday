import React from "react";

export const ShowMore = ({visible, data, add, setItem}) => {
    const showMore = () => {
        if(visible <= data.length) setItem(visible + add)
    }

    return (
        <button
            className="backWhite"
            onClick={() => showMore()}
            style={visible >= data.length ? {display: "none"} : null}
        >Показать еще</button>
    )
}
