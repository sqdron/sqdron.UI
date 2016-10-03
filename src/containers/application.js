import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import _ from 'lodash'
// import * as Colors from 'material-ui/styles/colors'
// import * as ColorManipulator from 'material-ui/utils/colorManipulator'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  palette : {
    // primary1Color : Colors.white,
    // primary2Color : Colors.lightBlue700,
    // primary3Color : Colors.lightBlue100,
    // accent1Color  : Colors.white,
    // accent2Color  : Colors.white,
    // accent3Color  : Colors.white,
    // textColor     : Colors.fullWhite,
    // canvasColor   : '#303030',
    // borderColor   : ColorManipulator.fade(Colors.fullWhite, 0.3),
    // disabledColor : ColorManipulator.fade(Colors.fullWhite, 0.5)
  },
  textField : {
  }
})

class Application extends Component {
  static propTypes = {
    history : PropTypes.object.isRequired,
    store   : PropTypes.object.isRequired,
    routes  : PropTypes.object.isRequired,
    assets  : PropTypes.array
  }

  render () {
    const { history, store, routes, assets } = this.props
    var renderAssets = ''
    if (assets) {
      renderAssets = _.reduce(assets, (res, value) => {
        renderAssets += value
      })
    }
    return (
      <Provider store={store}>
        <div className='main-container'>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Router history={history} children={routes}/>
          </MuiThemeProvider>
          {renderAssets}
        </div>
      </Provider>
    )
  }
}

export default Application
