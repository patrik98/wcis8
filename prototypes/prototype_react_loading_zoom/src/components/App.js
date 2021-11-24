import React, {Fragment, useEffect, useRef, useState} from 'react';
import './App.css';
import WCIS8 from "./wcis8/WCIS8";
import DetailViewContext from "./wcis8/DetailContainer";
import LoadingAnimation from "./wcis8/loadingAnimation/LoadingAnimation";
import DetailView from "./wcis8/detailView/DetailView";

import content from '../util/content.json'

function App() {
    // const viewBox = useRef(null);

    const [isLoading, setIsLoading] = useState(true);
    const [detailViewKey, setDetailViewKey] = useState('');
    const [viewBox, setViewBox] = useState('');
    const [defaultTransform, setDefaultTransform] = useState('');

    setTimeout(() => {
        setIsLoading(false)
    }, 2000);

    useEffect(() => {
        const viewBox = document.querySelector('#view-box');
        setDefaultTransform(viewBox.style.transform);
        setViewBox(viewBox);
    }, [])

    const setDefaultView = () => {
        setDetailViewKey('');
        viewBox.style.transform = defaultTransform;
    }

    return (
        <Fragment>
            <DetailViewContext.Provider value={{detailViewKey, setDetailViewKey}}>
                <div>
                    <div className={'view-container'}>
                        <svg id="view-box" viewBox="-100 -100 800 600">
                            <WCIS8 viewBox={viewBox} onResetZoom={setDefaultView}></WCIS8>
                            {isLoading && <LoadingAnimation></LoadingAnimation>}
                        </svg>
                    </div>
                    <DetailView detailViewKey={detailViewKey} onResetZoom={setDefaultView} content={content}></DetailView>
                </div>
            </DetailViewContext.Provider>

        </Fragment>

    );
}

export default App;
