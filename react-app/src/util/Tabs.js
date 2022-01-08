import React, {Fragment} from 'react';
import '../components/wcis8/detailView/DetailView.scss';

function Tabs({tabNameList, onTabChange}) {

    return (
        <Fragment>
            <div>
                <ul className={'content-tabs'}>
                    {tabNameList.map(item => (
                        <li className={'bg-green-400 py-4 px-8 border'} onClick={() => {onTabChange(item.index)}}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </Fragment>

    );
}

export default Tabs;
