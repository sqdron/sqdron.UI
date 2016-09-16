import DevTools from '../containers/development'

export const accept = (configuration) => {
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      configuration.enhance(devToolsExtension())
    }
  }

  configuration.enhance(DevTools.instrument())
}
