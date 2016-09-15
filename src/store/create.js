import configurator from './configurator'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware, routerReducer as router } from 'react-router-redux'
import thunk from 'redux-thunk'
import DevTools from '../containers/development'
import { combineReducers } from 'redux'

export const create = (initialState = {}, history) => {
  let configuration = configurator()
  require('./configure.dev')(configuration)
  // require('./configure.reduce')(configuration)
  // require('./configure.reduce')(configuration)
  return configuration.create(initialState)
}

export default (initialState = {}, history) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, routerMiddleware(history)]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  if (__DEV__) {
    enhancers.push(DevTools.instrument())
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    combineReducers({router}),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  if (module.hot) {
    module.hot.accept('./configure.reduce', () => {
      // const reducers = require('./reducers').default
      store.reload()
    })
  }
  return store
}
