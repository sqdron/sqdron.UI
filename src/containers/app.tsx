import * as React from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/session';

import Navigation from '../components/navigation/navigation'
import NavigationHeader from '../components/navigation/navigation-header'
import NavigationItem from '../components/navigation/navigation-item'

// import { loginUser, logoutUser } from '../actions/session';

// import { Link } from 'react-router';
// import Button from '../partials/button';
// import Content from '../partials/content';
// import LoginModal from '../partials/login-modal';
// import Logo from '../partials/logo';
// import Navigator from '../partials/navigator';
// import NavigatorItem from '../partials/navigator-item';


interface IAppProps extends React.Props<any> {
    session: any;
    login: () => void;
    logout: () => void;
}

function mapStateToProps(state) {
    return {
        session: state.session,
        router: state.router,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: () => dispatch(loginUser())
        // logout: () => dispatch(logoutUser()),
    };
}

class App extends React.Component<IAppProps, void> {
    render() {
        // const { session, login, logout, children } = this.props;
        // const token = session.get('token', false);
        // const isLoggedIn = token && token !== null && typeof token !== 'undefined';

        return (

            <div id="app-view" className="landing-page">
                <Navigation>
                    <div className="navbar navbar-default" id="landing-header" role="navigation">
                        <div className="container">
                            <NavigationHeader>
                                
                            </NavigationHeader>
                            <ul className="nav navbar-nav navbar-right">
                            <NavigationItem active={ true }>
                                Home
                            </NavigationItem>
                            <NavigationItem>
                                Features
                            </NavigationItem>
                            <NavigationItem>
                                Testimonials
                            </NavigationItem>
                                </ul>
                        </div>
                    </div>
                </Navigation>
                {this.props.children}
            </div>
        );
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
