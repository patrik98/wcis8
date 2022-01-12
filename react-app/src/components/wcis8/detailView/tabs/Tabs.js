import React, {Fragment} from 'react';
import '../DetailView.scss';

function Tabs({tabNameList, onTabChange}) {

    return (
        <Fragment>
            <div className={'top-0 m-4 mb-0 flex flex-row flex-wrap bg-transparent'}>
                <div className={'py-4 flex flex-row flex-wrap tabs'}>
                    {tabNameList.map((item) => (
                        <div className='flex-none h-10 mb-2 text-2xl font-medium' onClick={() => {onTabChange(item.index)}}>{item.name}</div>
                    ))}
                </div>
                <div className={'flex-1 bg-white'}></div>
            </div>
        </Fragment>

    );
}

export default Tabs;