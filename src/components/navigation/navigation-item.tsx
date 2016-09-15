import * as React from 'react';
import * as classNames from 'classnames';


interface INavigationItemProps extends React.Props<any>{
    visible?:boolean;
    active?:boolean;
    section?:string;
}

const NavigationItem = ({
    visible = true,
    active = false,
    children = null
}:INavigationItemProps) => {
    // const visibleClass = visible == true ? 'block' : 'hide';
    const ss = classNames({'active' : active});
    return(
            <li className={ss}>
                <a href='#section-0'>
                    { children }
                </a>
            </li>
    )
};

export default NavigationItem;