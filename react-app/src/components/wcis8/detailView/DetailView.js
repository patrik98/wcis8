import React, {Fragment, useEffect, useState, useRef} from 'react';
import './DetailView.scss';
import Cloud from "./Cloud";
import Section1 from './mini8Assets/WCIS8_section1.svg';
import Section2 from './mini8Assets/WCIS8_section2.svg';
import Section3 from './mini8Assets/WCIS8_section3.svg';
import Section4 from './mini8Assets/WCIS8_section4.svg';
import Section5 from './mini8Assets/WCIS8_section5.svg';
import Section6 from './mini8Assets/WCIS8_section6.svg';
import Section7 from './mini8Assets/WCIS8_section7.svg';
import Tabs from "./tabs/Tabs";
import TwoColumn from "./twoColumn/TwoColumn";
import FiveColumn from './fiveColumn/FiveColumn';
import Image from "./Image";
import Video from "./Video";


function DetailView({detailViewKey, onResetZoom, content}) {
    const video = useRef();

    const [tabList, setTabList] = useState([
        {
            "name": "Tab 1",
            "content": [
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
                            "text": "eins",
                            "weight": 1
                        },
                        {
                            "text": "zwei",
                            "weight": 2
                        },
                        {
                            "text": "drei",
                            "weight": 3
                        }
                    ]
                }
            ]
        },
        {
            "name": "Tab 2",
            "content": [
                {
                    "type": "title",
                    "text": "Hello World"
                },
                {
                    "type": "wordCloud",
                    "wordList": [
                        {
                            "text": "eins",
                            "weight": 1
                        },
                        {
                            "text": "zwei",
                            "weight": 2
                        },
                        {
                            "text": "drei",
                            "weight": 3
                        }
                    ]
                }
            ]
        }
    ])
    const [tabIndex, setTabIndex] = useState(0)
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
                    "weight": 1
                },
                {
                    "text": "xyz",
                    "weight": 3
                }
            ]
        }
    ])

    useEffect(() => {
        if (tabList && Array.isArray(tabList) && tabList.length > 0) {
            const tabContent = tabIndex >= 0 && tabIndex < tabList.length ? tabList[tabIndex] : 0;
            setContentObject(tabContent.content);

        }
    }, [tabList, tabIndex])

    const isContentAndKeyValid = () => {
        const hasValidSection = !!(content.hasOwnProperty('sections') && content.sections);
        const hasValidKey = !!(hasValidSection && content.sections.hasOwnProperty(detailViewKey) && content.sections[detailViewKey]);
        const hasValidTabs = !!(hasValidKey && content.sections[detailViewKey].hasOwnProperty('tabs') && content.sections[detailViewKey].tabs);

        return !!hasValidTabs;
    }

    useEffect(() => {
        const detailContainer = document.querySelector('.detail-container');
        if (detailViewKey && detailViewKey.length > 0) {
            if (isContentAndKeyValid()) {
                setTabIndex(0)
                setTabList(content.sections[detailViewKey].tabs)
                detailContainer.classList.add('visible');
                return;
            }
        }

        detailContainer.classList.remove('visible');
    }, [detailViewKey])

    const onBackButtonClick = () => {
        if (video.current) {
            video.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
        onResetZoom()
    }

    const onTabChange = (tabIndex) => {
        console.log(tabIndex)
        setTabIndex(tabIndex)
    }

    function wcis8SelectedView(value) {
        switch (value) {
            case "rightTop":
                return (<img src={Section1} alt="Section 1" onClick={onBackButtonClick}/>);
            case "rightRight":
                return (<img src={Section2} alt="Section 2" onClick={onBackButtonClick}/>);
            case "rightBottom":
                return (<img src={Section3} alt="Section 3" onClick={onBackButtonClick}/>);
            case "middle":
                return (<img src={Section4} alt="Section 4" onClick={onBackButtonClick}/>);
            case "leftTop":
                return (<img src={Section5} alt="Section 5" onClick={onBackButtonClick}/>);
            case "leftLeft":
                return (<img src={Section6} alt="Section 6" onClick={onBackButtonClick}/>);
            case "leftBottom":
                return (<img src={Section7} alt="Section 7" onClick={onBackButtonClick}/>);
        }
    }

    function renderContentObjects(contentObject) {
        switch (contentObject.type) {
            case "title":
                return (<h2 className={'text-5xl'}>{contentObject.text}</h2>);
            case "text":
                return (<div dangerouslySetInnerHTML={{ __html: contentObject.text }} />);
            case "video":
                return (<Video content={contentObject} refHolder={video} />);
            case "image":
                return (<Image content={contentObject} />);
            case "wordCloud":
                return (
                    <Cloud
                        contentArray={contentObject.wordList}/>);
            case "twoColumn":
                return (<TwoColumn content={contentObject} />);
            case "fiveColumn":
                return (<FiveColumn content={contentObject} />);
            default:
                return null;
        }
    }

    return (
        <Fragment>
            <div className={'detail-container'}>
                <div className={'overview'}>
                        <a onClick={onBackButtonClick} type={'button'} className={''}>
                            zurück
                        </a>
                        {wcis8SelectedView(detailViewKey)}
                </div>

                <Tabs tabNameList={tabList.map((item,index) => { return {'name': item.name, index}})} onTabChange={onTabChange}/>

                <div className={'detail-container-inner p-4 md:p-8'}>
                    {contentObject.map((item, id) => (
                            <div key={id} className={'mt-0 mb-12'}>
                                {renderContentObjects(item)}
                            </div>
                        )
                    )}
                </div>
            </div>
        </Fragment>

    );
}

export default DetailView;
