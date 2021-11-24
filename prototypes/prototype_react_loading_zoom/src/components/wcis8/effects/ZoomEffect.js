import React, {Fragment, useEffect, useState} from 'react';
import './ZoomEffect.css';

function ZoomEffect({children, viewBox, zoomIn, onZoomTrigger, onResetZoom}) {
    // const ref = useRef(null);
    const [ref, setRef] = useState(null);

    const getCenter = (svgElement) => {
        let {x, y, width, height} = svgElement.getBoundingClientRect();
        let centerX = width / 2 + x;
        let centerY = height / 2 + y;

        return {centerX, centerY}
    }

    const onClick = (event) => {
        setRef(event.target)
        onZoomTrigger();
    }

    useEffect(() => {
        if(viewBox) {
            if (zoomIn) {
                const {centerX: refCenterX, centerY: refCenterY} = getCenter(ref);
                const {centerX: viewBoxCenterX, centerY: viewBoxCenterY} = getCenter(viewBox);

                const scale = 35;
                const offsetX = (viewBoxCenterX - refCenterX) * scale;
                const offsetY = (viewBoxCenterY - refCenterY) * scale;

                viewBox.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`
            } else {
                onResetZoom();
            }
        }
    }, [zoomIn])

    return (
        <Fragment>
            <g id={'wrapper'} onClick={onClick}>
                {children}
            </g>
        </Fragment>
    );
}

export default ZoomEffect;
