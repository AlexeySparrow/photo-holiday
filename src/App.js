import React from "react";
import {API} from "./store/API/API";
import {Index} from "./pages/Index";
import {Header} from "./components/OtherComponents/Header/Header";
import {Footer} from "./components/OtherComponents/Footer/Footer";

export const App = () => {

    API()

    return (
        <>
            <Header/>
            <Index/>
            <Footer/>
        </>
    );
}
