import React from 'react';
import './CircleTitle.css';

function CircleTitle({content, css_class}) {
    const tspans = content.lines.map(line => {
        return <tspan x={content.pos[0]} dy={20}>{line}</tspan>
    });

    return (
        <text x={content.pos[0]} y={content.pos[1]} textAnchor='middle' className={css_class}>
            {tspans}
       </text>
    );
}

export default CircleTitle;