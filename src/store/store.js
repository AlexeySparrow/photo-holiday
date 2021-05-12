import {combineReducers, createStore} from "redux";
import {mainReducer} from "./redusers/mainReduser";
import {newsReducer} from "./redusers/newsReduser";
import {boothReducer} from "./redusers/boothReduser";
import {orderReducer} from "./redusers/orderReducer";


let reducers = combineReducers({
    main: mainReducer,
    news: newsReducer,
    booth: boothReducer,
    order: orderReducer
});

let store = createStore(reducers);

export default store;
