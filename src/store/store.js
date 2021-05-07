import {combineReducers, createStore} from "redux";
//пример -  import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    //пример - navigation: navigationReducer,
});

let store = createStore(reducers);

export default store;