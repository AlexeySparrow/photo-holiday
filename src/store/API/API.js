import {useCallback, useEffect} from "react";
import * as axios from "axios";
import {useDispatch} from "react-redux";
import {setBoothData} from "../redusers/boothReduser";
import {setNewsData} from "../redusers/newsReduser";
import {setFaqData, setWhyWeData} from "../redusers/mainReduser";

export const API = () => {

    const dispatch = useDispatch()
    const getBoothData = useCallback((data) => dispatch((setBoothData(data))), [dispatch])
    const getNewsData = useCallback((data) => dispatch((setNewsData(data))), [dispatch])
    const getWhyWeData = useCallback((data) => dispatch((setWhyWeData(data))), [dispatch])
    const getFaqData = useCallback((data) => dispatch((setFaqData(data))), [dispatch])

    useEffect(() => {
        let data = async () => {
            let response = await axios.get('https://alexeysparrow.github.io/photo-holiday/json/data.json')
            let result = response.data

            getBoothData(result.photoBooth)
            getNewsData(result.news)
            getWhyWeData(result.whyAreWe)
            getFaqData(result.faq)
        }
        data()
    }, [getBoothData, getFaqData, getNewsData, getWhyWeData])
}
