import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import {App} from "./App";
import './assets/scss/_zeroStyle.scss';
import './assets/scss/main.scss';
import './assets/scss/_fonts.scss';
import './assets/scss/_scroll.scss';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
