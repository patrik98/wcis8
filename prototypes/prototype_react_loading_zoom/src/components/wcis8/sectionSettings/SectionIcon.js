import React from 'react';
import './SectionIcon.css';

function SectionIcon({content}) {
    const dim = 28;

    return (
        <image x={content.pos[0] - dim/2} y={content.pos[1] - dim} width={dim} height={dim} href={content.icon.path} />
    )
}

export default SectionIcon;