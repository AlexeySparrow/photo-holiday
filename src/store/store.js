import {combineReducers, createStore} from "redux";
import {mainReducer} from "./redusers/mainReduser";
import {newsReducer} from "./redusers/newsReduser";
import {boothReducer} from "./redusers/boothReduser";


let reducers = combineReducers({
    main: mainReducer,
    news: newsReducer,
    booth: boothReducer
});

let store = createStore(reducers);

export default store;
