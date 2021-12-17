import React, {Fragment, useEffect, useState} from 'react';
import './DetailView.scss';
import Cloud from "./Cloud";
import Section1 from './mini8Assets/WCIS8_section1.svg';
import Section2 from './mini8Assets/WCIS8_section2.svg';
import Section3 from './mini8Assets/WCIS8_section3.svg';
import Section4 from './mini8Assets/WCIS8_section4.svg';
import Section5 from './mini8Assets/WCIS8_section5.svg';
import Section6 from './mini8Assets/WCIS8_section6.svg';
import Section7 from './mini8Assets/WCIS8_section7.svg';


function DetailView({detailViewKey, onResetZoom, content}) {
    const [contentObject, setContentObject] = useState([
        {
            "type": "title",
            "text": "Hello World"
        },
        {
            "type": "text",
            "text": "Lorem Ipsum ..."
        },
        {
            "type": "image",
            "url": "https://picsum.photos/200/300",
            "altText": ""
        },
        {
            "type": "video",
            "url": "https://www.youtube.com/embed/GXjyX-El1mU"
        },
        {
            "type": "wordCloud",
            "wordList": [
                {
                    "text": "abc",
                    "settings": {
                        "minFontSize": 12,
                        "maxFontSize": 12
                    }
                },
                {
                    "text": "xyz",
                    "settings": {
                        "minFontSize": 17,
                        "maxFontSize": 17
                    }
                }
            ]
        }
    ])

    const isContentAndKeyValid = () => {
        const hasValidSection = content.hasOwnProperty('sections') && content.sections;
        const hasValidKey = !!hasValidSection && content.sections.hasOwnProperty(detailViewKey) && content.sections[detailViewKey];
        const hasValidContent = !!hasValidKey && content.sections[detailViewKey].hasOwnProperty('content');

        return !!hasValidContent;
    }

    useEffect(() => {
        const detailContainer = document.querySelector('.detail-container');
        if (detailViewKey && detailViewKey.length > 0) {
            if (isContentAndKeyValid()) {
                setContentObject(content.sections[detailViewKey].content)
            }

            detailContainer.classList.add('visible');
        } else {
            detailContainer.classList.remove('visible');
        }
    }, [detailViewKey])

    const onBackButtonClick = () => {
        onResetZoom()
    }

    function wcis8SelectedView(value) {
        switch (value) {
            case "rightTop":
                return (<img style={{width: "20%"}} src={Section1} alt="Section 1"/>);
            case "rightRight":
                return (<img style={{width: "20%"}} src={Section2} alt="Section 2"/>);
            case "rightBottom":
                return (<img style={{width: "20%"}} src={Section3} alt="Section 3"/>);
            case "middle":
                return (<img style={{width: "20%"}} src={Section4} alt="Section 4"/>);
            case "leftTop":
                return (<img style={{width: "20%"}} src={Section5} alt="Section 5"/>);
            case "leftLeft":
                return (<img style={{width: "20%"}} src={Section6} alt="Section 6"/>);
            case "leftBottom":
                return (<img style={{width: "20%"}} src={Section7} alt="Section 7ç"/>);
        }
    }

    function renderContentObjects(contentObject) {
        switch (contentObject.type) {
            case "title":
                return (<h2 className={'text-5xl mb-4'}>{contentObject.text}</h2>);
            case "text":
                return (<p>
                    {contentObject.text}
                </p>);
            case "video":
                return (<iframe width="560" height="315" src={contentObject.url}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />);
            case "image":
                return (<img src={contentObject.url} alt={contentObject.altText ? contentObject.altText : ''}/>);
            case "wordCloud":
                return (
                    <Cloud
                        contentArray={contentObject.wordList.map(item => item.text)}/>);
            default:
                return null;
        }
    }


    return (
        <Fragment>
            <div className={'detail-container'}>
                <div className={'detail-container-inner'}>
                    {wcis8SelectedView(contentObject.title)}
                    {contentObject.map((item, id) => (
                            <div key={id} className={'my-3'}>
                                {renderContentObjects(item)}
                            </div>
                        )
                    )}

                    <a onClick={onBackButtonClick} type={'button'} className={'mt-4'}>
                        Zurück
                    </a>
                </div>
            </div>
        </Fragment>

    );
}

export default DetailView;
