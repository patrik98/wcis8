import React, {Fragment, useEffect} from 'react';
import './WCIS8.scss';
import InteractivePath from "./interactivePath/InteractivePath";
import SectionIcon from "./sectionSettings/SectionIcon";
import SectionTitle from "./sectionSettings/SectionTitle";
import CircleTitle from "./sectionSettings/CircleTitle"

function WCIS8({viewBox, onResetZoom, content}) {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }


    useEffect(() => {

        let randomSectionIds = [];

        const interval = setInterval(() => {
            if (randomSectionIds.length === 0) {
                randomSectionIds = shuffle([1, 2, 3, 4, 5, 6, 7]); //shuffles section ids --> each section for one round
            }

            const sectionName = "section-" + randomSectionIds.pop();

            const section = document.getElementById(sectionName);
            section.style.animation = "shake";
            section.style.animationDuration = "1.3s";
            setTimeout(() => {
                section.style.animation = "none";
            }, 1000)
        }, randomInteger(4000, 6000));
        return () => clearInterval(interval);
    }, []);


    return (
        <Fragment>
            <path id="Background" className="cls-1"
                  d="M540.79,94.57a202.12,202.12,0,0,0-119.85,39.17A202.07,202.07,0,0,0,301.1,94.57C189,94.57,98,185.49,98,297.64S189,500.71,301.1,500.71a202.07,202.07,0,0,0,119.84-39.17,202.12,202.12,0,0,0,119.85,39.17c112.15,0,203.07-90.92,203.07-203.07S652.94,94.57,540.79,94.57Z"
                  transform="translate(-98.03 -94.57)"/>

            <CircleTitle content={content.labels.leftCircle.settings.top} css_class={'top'}></CircleTitle>
            <CircleTitle content={content.labels.leftCircle.settings.center} css_class={'center'}></CircleTitle>
            <CircleTitle content={content.labels.leftCircle.settings.bottom} css_class={'bottom'}></CircleTitle>

            <CircleTitle content={content.labels.rightCircle.settings.top} css_class={'top'}></CircleTitle>
            <CircleTitle content={content.labels.rightCircle.settings.center} css_class={'center'}></CircleTitle>
            <CircleTitle content={content.labels.rightCircle.settings.bottom} css_class={'bottom'}></CircleTitle>

            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'rightRight'}>
                <path className="cls-2" id="section-1"
                      d="M655.89,182.54l-60.7,60.7a76.93,76.93,0,0,1,0,108.79l60.7,60.7A162.78,162.78,0,0,0,655.89,182.54Z"
                      transform="translate(-98.03 -94.57)"/>
                <SectionIcon content={content.sections.rightRight.settings}></SectionIcon>
                <SectionTitle content={content.sections.rightRight.settings}></SectionTitle>
            </InteractivePath>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'rightBottom'}>
                <linearGradient id="gradientRightBottom">
                    <stop offset="0" stopColor="#48BED8"/>
                    <stop offset="1" stopColor="#0462A7"/>
                </linearGradient>
                <path className="cls-3" id="section-2"
                      d="M655.89,412.73,595.19,352a76.93,76.93,0,0,1-108.79,0l-60.7,60.7A162.76,162.76,0,0,0,655.89,412.73Z"
                      transform="translate(-98.03 -94.57)"
                      fill="url(#gradientRightBottom)"/>
                <SectionIcon content={content.sections.rightBottom.settings}></SectionIcon>
                <SectionTitle content={content.sections.rightBottom.settings}></SectionTitle>
            </InteractivePath>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'leftLeft'}>
                <path className="cls-4" id="section-3"
                      d="M186,412.73,246.7,352a76.93,76.93,0,0,1,0-108.79L186,182.54A162.78,162.78,0,0,0,186,412.73Z"
                      transform="translate(-98.03 -94.57)"/>
                <SectionIcon content={content.sections.leftLeft.settings}></SectionIcon>
                <SectionTitle content={content.sections.leftLeft.settings}></SectionTitle>
            </InteractivePath>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'leftTop'}>
                <linearGradient id="gradientLeftTop">
                    <stop offset="0" stopColor="#93C02F"/>
                    <stop offset="1" stopColor="#48BED8"/>
                </linearGradient>
                <path className="cls-5" id="section-4"
                      d="M186,182.54l60.7,60.7a76.93,76.93,0,0,1,108.79,0l60.7-60.7A162.78,162.78,0,0,0,186,182.54Z"
                      transform="translate(-98.03 -94.57)"
                      fill="url(#gradientLeftTop)"/>
                <SectionIcon content={content.sections.leftTop.settings}></SectionIcon>
                <SectionTitle content={content.sections.leftTop.settings}></SectionTitle>
            </InteractivePath>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'leftBottom'}>
                <linearGradient id="gradientLeftBottom">
                    <stop offset="0" stopColor="#93C02F"/>
                    <stop offset="1" stopColor="#48BED8"/>
                </linearGradient>
                <path className="cls-6" id="section-5"
                      d="M371.24,329.24A77,77,0,0,1,246.7,352L186,412.73a162.74,162.74,0,0,0,228.13,2A172,172,0,0,1,371.24,329.24Z"
                      transform="translate(-98.03 -94.57)"
                      fill="url(#gradientLeftBottom)"/>
                <SectionIcon content={content.sections.leftBottom.settings}></SectionIcon>
                <SectionTitle content={content.sections.leftBottom.settings}></SectionTitle>
            </InteractivePath>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'rightTop'}>
                <linearGradient id="gradientRightTop">
                    <stop offset="0" stopColor="#48BED8"/>
                    <stop offset="1" stopColor="#0462A7"/>
                </linearGradient>
                <path className="cls-7" id="section-6"
                      d="M427.76,180.59A171.92,171.92,0,0,1,470.65,266a76.94,76.94,0,0,1,124.54-22.8l60.7-60.7A162.74,162.74,0,0,0,427.76,180.59Z"
                      transform="translate(-98.03 -94.57)"
                      fill="url(#gradientRightTop)"/>
                <SectionIcon content={content.sections.rightTop.settings}></SectionIcon>
                <SectionTitle content={content.sections.rightTop.settings}></SectionTitle>
            </InteractivePath>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'middle'}>
                <path className="cls-8" id="section-7"
                      d="M463.84,297.16A162.23,162.23,0,0,0,421,187.54c-1.56-1.68-3.12-3.36-4.76-5l-60.7,60.7A76.69,76.69,0,0,1,378,297.64,162.2,162.2,0,0,0,421,407.73c1.55,1.69,3.11,3.37,4.75,5L486.4,352a76.72,76.72,0,0,1-22.56-54.39Z"
                      transform="translate(-98.03 -94.57)"/>
            </InteractivePath>
        </Fragment>
    );
}


export default WCIS8;
