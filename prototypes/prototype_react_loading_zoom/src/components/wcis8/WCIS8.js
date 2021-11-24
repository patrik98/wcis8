import React, {Fragment} from 'react';
import './WCIS8.scss';
import InteractivePath from "./interactivePath/InteractivePath";

function WCIS8({viewBox, onResetZoom}) {
    return (
        <Fragment>
            <path id="Background" class="cls-1"
                  d="M540.79,94.57a202.12,202.12,0,0,0-119.85,39.17A202.07,202.07,0,0,0,301.1,94.57C189,94.57,98,185.49,98,297.64S189,500.71,301.1,500.71a202.07,202.07,0,0,0,119.84-39.17,202.12,202.12,0,0,0,119.85,39.17c112.15,0,203.07-90.92,203.07-203.07S652.94,94.57,540.79,94.57Z"
                  transform="translate(-98.03 -94.57)"/>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'rightRight'}>
                <path class="cls-2"
                      d="M655.89,182.54l-60.7,60.7a76.93,76.93,0,0,1,0,108.79l60.7,60.7A162.78,162.78,0,0,0,655.89,182.54Z"
                      transform="translate(-98.03 -94.57)"/>
            </InteractivePath>
                <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'rightBottom'}>
                <path className="cls-3"
                      d="M655.89,412.73,595.19,352a76.93,76.93,0,0,1-108.79,0l-60.7,60.7A162.76,162.76,0,0,0,655.89,412.73Z"
                      transform="translate(-98.03 -94.57)"/>
            </InteractivePath>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'leftLeft'}>
                <path className="cls-4"
                      d="M186,412.73,246.7,352a76.93,76.93,0,0,1,0-108.79L186,182.54A162.78,162.78,0,0,0,186,412.73Z"
                      transform="translate(-98.03 -94.57)"/>
            </InteractivePath>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'leftTop'}>
                <path class="cls-5"
                      d="M186,182.54l60.7,60.7a76.93,76.93,0,0,1,108.79,0l60.7-60.7A162.78,162.78,0,0,0,186,182.54Z"
                      transform="translate(-98.03 -94.57)"/>
            </InteractivePath>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'leftBottom'}>
                <path class="cls-6"
                      d="M371.24,329.24A77,77,0,0,1,246.7,352L186,412.73a162.74,162.74,0,0,0,228.13,2A172,172,0,0,1,371.24,329.24Z"
                      transform="translate(-98.03 -94.57)"/>
            </InteractivePath>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'rightTop'}>
                <path class="cls-7"
                      d="M427.76,180.59A171.92,171.92,0,0,1,470.65,266a76.94,76.94,0,0,1,124.54-22.8l60.7-60.7A162.74,162.74,0,0,0,427.76,180.59Z"
                      transform="translate(-98.03 -94.57)"/>
            </InteractivePath>
            <InteractivePath viewBox={viewBox} onResetZoom={onResetZoom} contentKey={'middle'}>
                <path class="cls-8"
                      d="M463.84,297.16A162.23,162.23,0,0,0,421,187.54c-1.56-1.68-3.12-3.36-4.76-5l-60.7,60.7A76.69,76.69,0,0,1,378,297.64,162.2,162.2,0,0,0,421,407.73c1.55,1.69,3.11,3.37,4.75,5L486.4,352a76.72,76.72,0,0,1-22.56-54.39Z"
                      transform="translate(-98.03 -94.57)"/>
            </InteractivePath>
            <path class="cls-9"
                  d="M301.1,210.52a87.12,87.12,0,1,0,73.63,133.65c-1.37-4.89-2.55-9.87-3.49-14.93a76.93,76.93,0,1,1-15.75-86c.9.9,1.76,1.81,2.6,2.73l1,1.09c.49.57,1,1.13,1.46,1.71s.77,1,1.15,1.45l1.09,1.4c.42.57.83,1.14,1.23,1.72l.83,1.17c.43.65.86,1.3,1.27,2,.21.32.41.65.61,1,.45.73.88,1.45,1.3,2.19l.42.75c.44.81.88,1.62,1.3,2.44.07.16.15.31.22.46q.69,1.37,1.32,2.76a77,77,0,0,1,6.78,31.6,162.86,162.86,0,0,0,3.52,33.49A87.15,87.15,0,0,0,301.1,210.52Z"
                  transform="translate(-98.03 -94.57)"/>
            <path class="cls-9"
                  d="M541.82,210.52a87.06,87.06,0,0,0-74.35,41.7c1.24,4.54,2.31,9.14,3.18,13.82a76.93,76.93,0,1,1,15.75,86c-.89-.89-1.76-1.8-2.59-2.72l-1-1.14c-.47-.55-.95-1.09-1.41-1.65s-.83-1-1.23-1.56-.67-.84-1-1.26c-.46-.62-.91-1.26-1.36-1.89l-.67-1c-.5-.73-1-1.47-1.44-2.21l-.41-.64c-.52-.85-1-1.7-1.51-2.56l-.14-.25c-1.09-1.95-2.09-3.94-3-5.95h0a76.78,76.78,0,0,1-6.81-31.61v-.48a163.69,163.69,0,0,0-3.14-31.27,87.11,87.11,0,1,0,81.12-55.37Z"
                  transform="translate(-98.03 -94.57)"/>
        </Fragment>
    );
}

export default WCIS8;
