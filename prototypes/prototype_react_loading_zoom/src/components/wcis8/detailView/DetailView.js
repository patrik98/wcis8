import React, {Fragment, useEffect, useState} from 'react';
import './DetailView.scss';

function DetailView({detailViewKey, onResetZoom, content}) {
    const [contentObject, setContentObject] = useState({
        title: '',
        text: ''
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
                    <h2>{contentObject.title}</h2>
                    <p>
                        {contentObject.text}
                    </p>
                    <a onClick={onBackButtonClick} type={'button'}>
                        Zurück
                    </a>
                </div>
            </div>
        </Fragment>

    );
}

export default DetailView;
