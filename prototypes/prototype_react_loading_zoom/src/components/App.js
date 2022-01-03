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
    }, 5000);

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
                <div className={'wcis8-container'}>
                    <div className={'view-container'}>
                        <svg id="view-box" viewBox="-230 -100 1100 600">
                            <WCIS8 content={content} viewBox={viewBox} onResetZoom={setDefaultView}/>
                            {isLoading && <LoadingAnimation />}
                        </svg>
                    </div>
                    <DetailView detailViewKey={detailViewKey} onResetZoom={setDefaultView} content={content}/>
                </div>
            </DetailViewContext.Provider>

        </Fragment>

    );
}

export default App;
