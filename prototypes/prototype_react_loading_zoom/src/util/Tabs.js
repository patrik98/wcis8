import React, {Fragment} from 'react';

function Tabs({tabNameList, onTabChange}) {

    return (
        <Fragment>
            <div>
                <ul className={'list-none flex'}>
                    {tabNameList.map(item => (
                        <li className={'bg-green-400 py-4 px-8 border'} onClick={() => {onTabChange(item.index)}}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </Fragment>

    );
}

export default Tabs;
