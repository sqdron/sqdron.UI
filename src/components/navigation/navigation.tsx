import * as React from 'react';

interface INavigationProps extends React.Props<any>{
    visible?:boolean;
    children?:INavigationProps;
}

const Navigation = ({children = null}:INavigationProps)=>{
    return(
        <div>
            {children}
        </div>
    )
};

export default Navigation;