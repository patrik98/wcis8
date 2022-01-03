import React from 'react';
import {TagCloud} from 'react-tagcloud'

//https://github.com/madox2/react-tagcloud

function Cloud({contentArray}) {

    const colors = ["#49853c","#549bd4","#9babb2","#3e73b7","#f1813b","#fabd22"] //array containing different colors for words in cloud
    const maxWeight = Math.max(...contentArray.map(item => item.weight));
    const weightSteps = 1 / maxWeight

    function createData(minSize, maxSize) {
        let data = [];

        contentArray.forEach(content => {
            data.push({
                key: content.text,
                value: <div>{content.text}</div>,
                count: Math.floor(((maxSize - minSize) / weightSteps * content.weight) + minSize),
                color: colors[Math.floor(Math.random() * colors.length)]
            })
        })

        return data;
    }

    return (
        <div style={{ textAlign:"center"}}>
            <TagCloud
                minSize={20}
                maxSize={60}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                shuffle
                tags={createData(0, 10)}
                onClick={tag => alert(tag.text)}
            />
        </div>

    );
}

export default Cloud;
