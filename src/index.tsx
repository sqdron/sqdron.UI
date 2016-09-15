import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';
import routes from './store/routes';
import DevTools from './containers/devTools'

import configureStore from './store/configureStore';
// import classNames from 'styles/vendor.scss';
import './styles/vendor.scss'
import './styles/styles.scss'

// Global styles
// import './styles/index.css';
const store = configureStore({});

ReactDOM.render(
        <Provider store={ store }>
            <div>
                <Router history={ browserHistory }>
                    { routes }
                </Router>
                <DevTools />
            </div>
        </Provider>
    ,
    document.getElementById('root')
);

