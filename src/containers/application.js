import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import _ from 'lodash'
import { cyan500, cyan700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack } from 'material-ui/styles/colors'
// import { fade } from '../../utils/colorManipulator'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const muiTheme = getMuiTheme({
  palette : {
    textColor          : white,
    primary1Color      : white,
    primary2Color      : white,
    primary3Color      : white,
    accent1Color       : white,
    accent2Color       : white,
    accent3Color       : white,
    alternateTextColor : white,
    canvasColor        : white,
    borderColor        : grey300,
    pickerHeaderColor  : cyan500,
    shadowColor        : fullBlack
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
