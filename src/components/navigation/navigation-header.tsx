import * as React from 'react';

interface INavigationHeaderProps extends React.Props<any>{
    visible?:boolean;
    // children?:INavigationProps;
}

const NavigationHeader = ({visible = true}:INavigationHeaderProps)=>{
    const logo = require('../../static/images/logo.png');
    return(

        <div className="navbar-header">
            <a href="/" className="navbar-brand">
                 <img src={logo} alt="Clip-Two"/>
            </a>
        </div>
    )
};

export default NavigationHeader;