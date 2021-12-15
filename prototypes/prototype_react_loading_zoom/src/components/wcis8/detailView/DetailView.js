import React, {Fragment, useEffect, useState} from 'react';
import './DetailView.scss';
import Cloud from "./Cloud";

function DetailView({detailViewKey, onResetZoom, content}) {
    const [contentObject, setContentObject] = useState({
        title: '',
        text: '',
        type: ''
    })

    useEffect(() => {
        const detailContainer = document.querySelector('.detail-container');
        if (detailViewKey && detailViewKey.length > 0) {
            detailContainer.classList.add('visible');

            if (content && content.hasOwnProperty(detailViewKey)) {
                setContentObject(content[detailViewKey])
            }
        } else {
            detailContainer.classList.remove('visible');
        }
    }, [detailViewKey])

    const onBackButtonClick = () => {
        onResetZoom()
    }

    return (
        <Fragment>
            <div className={'detail-container'}>
                <div className={'detail-text'}>
                    <h2 className={'text-5xl mb-4'}>{contentObject.title}</h2>
                    {contentObject.type === 'text' && <p>
                        {contentObject.text}
                        Key: {detailViewKey}
                    </p>}
                    {contentObject.type === 'video' && <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/GXjyX-El1mU"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>}
                    <Cloud contentArray={["topic1", "topic2","topic3", "topic4","topic5", "topic6","topic7", "topic8"]}/>
                    <a onClick={onBackButtonClick} type={'button'} className={'mt-4'}>
                        Zurück
                    </a>
                </div>
            </div>
        </Fragment>

    );
}

export default DetailView;
