import React from 'react';
import {TagCloud} from 'react-tagcloud'

//https://github.com/madox2/react-tagcloud

function Cloud({contentArray}) {

    const colors = ["#FFFFFF"] //array containing different colors for words in cloud

    function createData(minSize, maxSize) {
        let data = [];
        contentArray.forEach(content => {
            data.push({
                value: <div>{content}</div>,
                count: Math.floor(Math.random() * (maxSize - minSize + 1) + minSize),
                color: colors[Math.floor(Math.random() * colors.length)]
            })
        })
        return data;
    }

    return (
        <div style={{ textAlign:"center"}}>
            <TagCloud
                minSize={10}
                maxSize={90}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                shuffle
                tags={createData(20, 40)}
                onClick={tag => alert(tag)}
            />
        </div>

    );
}

export default Cloud;
