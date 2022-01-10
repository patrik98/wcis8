import React from 'react';

function Image({content}) {
  return (<img src={content.url} alt={content.altText ? content.altText : ''}
               className={content.width ? content.width : ''}/>)
}

export default Image;
