import {useRouterHistory} from 'react-router'

import {applyMiddleware, compose, createStore, combineReducers} from 'redux'

export const StoreModule = (initialState = {}) => {
  return (ctx) => {

    ctx.createStore = () => {
      return createStore(
        combineReducers({ ...ctx.red }),
        initialState,
        compose(
          applyMiddleware(ctx.middlewares),
          ...ctx.enhancers
        ))
    }
  }
}

export default StoreModule
