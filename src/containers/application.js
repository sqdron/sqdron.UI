import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import DevTools from './development';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Application extends Component {
  static propTypes = {
    history : PropTypes.object.isRequired,
    routes : PropTypes.object.isRequired,
    store : PropTypes.object.isRequired
  }

  render() {
    const {history, routes, store} = this.props
    const devAssets = (__DEV__) ? <DevTools/> : '';
    return (
      <Provider store={store}>
        <div className="main-container" style={{height : '100%'}}>
          <MuiThemeProvider>
            <Router history={history} children={routes}/>
          </MuiThemeProvider>
          {devAssets}
        </div>
      </Provider>
    )
  }
}

export default Application
