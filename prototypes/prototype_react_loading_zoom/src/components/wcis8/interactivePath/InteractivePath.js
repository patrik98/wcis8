import React, {Fragment, useContext, useEffect} from 'react';
import './InteractivePath.css';
import ZoomEffect from "../effects/ZoomEffect";
import DetailViewContext from "../DetailContainer";

function InteractivePath({children, viewBox, contentKey = '', onResetZoom}) {
    const { setDetailViewKey } = useContext(DetailViewContext);
    const [zoomIn, setZoomIn] = React.useState(false);

    const onZoom = () => {
        setZoomIn(!zoomIn);
    }

    useEffect(() => {
        setDetailViewKey(zoomIn ? contentKey : '');
    }, [zoomIn])

    return (
        <Fragment>
            <ZoomEffect viewBox={viewBox} zoomIn={zoomIn} onZoomTrigger={onZoom} onResetZoom={onResetZoom}>
                {children}
            </ZoomEffect>
        </Fragment>
    );
}

export default InteractivePath;
