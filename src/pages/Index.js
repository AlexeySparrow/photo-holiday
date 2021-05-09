import React from 'react';
import {Video} from "../components/PageIndex/Video/Video";
import {Title} from "../components/PageIndex/Title/Title";
import {WhyWe} from "../components/PageIndex/WhyWe/WhyWe";
import {PhotoBooths} from "../components/PageIndex/PhotoBooths/PhotoBooths";
import {Faq} from "../components/PageIndex/Faq/Faq";
import {News} from "../components/PageIndex/News/News";

export const Index = () => {
    return (
        <>
            <Video/>
            <Title/>
            <WhyWe/>
            <PhotoBooths/>
            <Faq/>
            <News/>
        </>
    )
}
