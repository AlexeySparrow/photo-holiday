import React from "react";

export const TitleItem = ({title, text}) => {
    return (
        <>
            <p className='colorTitle'>{text}</p>
            <h2>{title}</h2>
        </>
    )
}
