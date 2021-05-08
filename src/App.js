import React, {useEffect, useState} from "react";
import * as axios from 'axios';

export const App = () => {
    const [data, setData] = useState('')

    useEffect(()=>{
        axios.get('https://alexeysparrow.github.io/photo-holiday/json/data.json')
            .then (res => {
                setData(res.data.whyAreWe)
            })
    }, [])

    let a = [...data]

    return (
        <div className='container'>
            <h1><span>123</span> 123</h1>
            <h2>123</h2>
            <h3>123</h3>
            <h4>123</h4>
            <p>123</p>
            <p className='grey'>123</p>
            <p className='lightGrey'>123</p>

            <div className="inputCheckbox">
                <input type="checkbox" id="check"/>
                <label htmlFor="check"/>
            </div>

            {
                a.map(z=>
                    <div>
                        <p>{z.title}</p>
                        <img src={z.icon} alt=""/>
                    </div>

                )
            }

        </div>
    );
}

// <div className="inputCheckbox">
//     <input type="checkbox" id="check"/>
//     <label htmlFor="check"/>
// </div>
