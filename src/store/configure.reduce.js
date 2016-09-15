import { combineReducers } from 'redux'

export const accept = (store) => {
  store.reducers = []
  store.injectReducer = (reducer) => {
    store.reducers[reducer.constructor.name] = reducer
  }

  store.reload = () => {
    store.replaceReducer(combineReducers(...store.reducers))
  }

  if (module.hot) {
    module.hot.accept('./configure.reduce.js', () => {
      store.reload()
    })
  }
}

export default accept

