import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import _ from 'lodash'

class Application extends Component {
  static propTypes = {
    history : PropTypes.object.isRequired,
    store   : PropTypes.object.isRequired,
    routes  : PropTypes.object.isRequired,
    assets  : PropTypes.array
  }

  render () {
    const { history, store, routes, assets } = this.props
    console.log(routes)
    var renderAssets = ''
    if (assets) {
      renderAssets = _.reduce(assets, (res, value) => {
        renderAssets += value
      })
    }
    return (
      <Provider store={store}>
        <div className='main-container'>
          <MuiThemeProvider>
            <Router history={history} children={routes}/>
          </MuiThemeProvider>
          {renderAssets}
        </div>
      </Provider>
    )
  }
}

export default Application
