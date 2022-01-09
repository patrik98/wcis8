import React from 'react';

function Video({content}) {
  return (
    <div id="responsiveVideoWrapper" className="relative h-0 pb-fluid-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={content.url}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
  )
}

export default Video;
