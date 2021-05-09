import React, {useCallback} from "react";
import style from "./New.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {setNewsVisible} from "../../../../store/redusers/newsReduser";
import {ShowMore} from "../../../OtherComponents/ShowMore/ShowMore";
import {Link, useLocation} from "react-router-dom";

export const New = () => {
    const dispatch = useDispatch()
    let location = useLocation()

    /* data */
    const data = useSelector(state => state.news.newsData)
    /* show more */
    const setVisible = useCallback((number) => dispatch(setNewsVisible(number)), [dispatch])
    const visible = useSelector(state => state.news.newsVisible)
    const add = useSelector(state => state.news.addItems)

    return (
        <div className={style.new}>
            {
                data.map(item =>
                    <Link key={item.id} to={{pathname: `/photo-holiday/news/${item.id}`, state: { background: location }}}>
                        <img src={item.titleImage} alt={item.title}/>
                        <div>
                            <p className="colorTitle">{item.type}</p>
                            <h4>{item.title} №{item.id}</h4>
                            <p>{item.description}</p>
                            <p className="grey">{item.date}</p>
                            <span/>
                        </div>
                    </Link>
                ).slice(0, visible)
            }
            <ShowMore
                visible={visible}
                data={data}
                add={add}
                setItem={setVisible}
            />
        </div>
    )
}
