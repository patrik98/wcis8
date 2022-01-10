import React from 'react';
import Image from "../Image";
import Video from "../Video";

function TwoColumn({content}) {
  return (
    <div style={{ textAlign:"center"}}>
      <div className="flex flex-row text-left">
        <div className="w-2/4">
         <div dangerouslySetInnerHTML={{ __html: content.textLeft }} />
        </div>
        <div className="w-2/4">
          {content.image && <Image content={content.image} />}
          {content.video && <Video content={content.video} />}
          <div dangerouslySetInnerHTML={{ __html: content.textRight }} />
        </div>
      </div>
    </div>
  );
}

export default TwoColumn;
