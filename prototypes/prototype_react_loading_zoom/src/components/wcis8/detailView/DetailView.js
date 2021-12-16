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

    function wcis8SelectedView(value) {
        switch (value) {
            case "rightTop":  return(<img style={{width: "20%"}} src={Section1} alt="Section 1"/>);
            case "rightRight":  return(<img style={{width: "20%"}} src={Section2} alt="Section 2"/>);
            case "rightBottom":  return(<img style={{width: "20%"}} src={Section3} alt="Section 3"/>);
            case "middle":  return(<img style={{width: "20%"}} src={Section4} alt="Section 4"/>);
            case "leftTop":  return(<img style={{width: "20%"}} src={Section5} alt="Section 5"/>);
            case "leftLeft":  return(<img style={{width: "20%"}} src={Section6} alt="Section 6"/>);
            case "leftBottom":  return(<img style={{width: "20%"}} src={Section7} alt="Section 7ç"/>);
        }
    }


    return (
        <Fragment>
            <div className={'detail-container'}>
                <div className={'detail-text'}>
                    {wcis8SelectedView(contentObject.title)}
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
