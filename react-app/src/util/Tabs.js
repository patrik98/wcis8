import React, {Fragment} from 'react';
import '../components/wcis8/detailView/DetailView.scss';

function Tabs({tabNameList, onTabChange}) {

    return (
        <Fragment>
            <div className={'tabs'}>
                <ul>
                    {tabNameList.map(item => (
                        <li onClick={() => {onTabChange(item.index)}}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </Fragment>

    );
}

export default Tabs;
