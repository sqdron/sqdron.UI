import DevTools from '../containers/development'

export default (configuration) => {
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      configuration.enhance(devToolsExtension());
    }
  }

  if (__DEV__) {
    configuration.enhance(DevTools.instrument());
  }

  if (module.hot) {
    module.hot.accept('./configure.reduce', () => {
      // const reducers = require('./reducers').default
      configuration.reload()
    })
  }

}
