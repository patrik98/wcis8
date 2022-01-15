import React from 'react';
import Image from "../Image";

function FiveColumn({content}) {
    return (
      <div className='flex flex-col' style={{ textAlign:"center"}}>
        <Image content={content.image} />
        <div className="flex flex-col md:flex-row flex-wrap text-left break-words">
          <div className="md:w-1/5 mt-4 md:-mt-10">
                <p className='font-sans text-3xl font-medium green'>{content.col_title1}</p>
                <p className='text-lg'>{content.text1}</p>
          </div>
          <div className="md:w-1/5 md:mt-20">
                <p className='font-sans text-3xl font-medium green'>{content.col_title2}</p>
                <p className='text-lg'>{content.text2}</p>
          </div>
          <div className="md:w-1/5 md:-mt-10">
                <p className='font-sans text-3xl font-medium green'>{content.col_title3}</p>
                <p className='text-lg'>{content.text3}</p>
          </div>
          <div className="md:w-1/5 md:mt-20">
                <p className='font-sans text-3xl font-medium green'>{content.col_title4}</p>
                <p className='text-lg'>{content.text4}</p>
          </div>
          <div className="md:w-1/5 md:-mt-10">
                <p className='font-sans text-3xl font-medium green'>{content.col_title5}</p>
                <p className='text-lg'>{content.text5}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default FiveColumn;