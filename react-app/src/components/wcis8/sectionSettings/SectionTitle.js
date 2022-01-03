import React from 'react';
import './SectionTitle.css';

function SectionTitle({content}) {
    return (
        <text x={content.pos[0]} y={content.pos[1]} textAnchor='middle' className={'section-title'}>
            <tspan x={content.pos[0]} dy={15}>{content.title}</tspan>
        </text>
    );
}

export default SectionTitle;