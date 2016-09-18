import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer as router } from 'react-router-redux'

export const StoreModule = (initialState = {}) => {
  return {
    init : (ctx) => {
      console.log('Initialize Store...')
      ctx.reducers = []
      ctx.middlewares = []
      ctx.enhancers = []
      ctx.reduce = (...reducer) => { ctx.reducers = [...ctx.reducers, ...reducer] }
      ctx.enhance = (...enhancer) => { ctx.enhancers = [...ctx.enhancers, ...enhancer] }

      ctx.reload = () => {
        ctx.store.replaceReducer(combineReducers(...ctx.reducers))
      }
    },
    run : (ctx) => {
      console.log('Run Store...')
      console.log(...ctx.reducers)
      console.log(router)
      ctx.store = createStore(
        require('./reduce').default(ctx),
        initialState,
        compose(
          applyMiddleware(...ctx.middlewares),
          ...ctx.enhancers
        ))

      ctx.history = syncHistoryWithStore(ctx.browserHistory, ctx.store, {
        selectLocationState : (state) => state.router
      })

      if (module.hot) {
        module.hot.accept('./reduce', () => {
          const nextRootReducer = require('./reduce').default()
          ctx.store.replaceReducer(nextRootReducer)
        })
      }
    }
  }
}

export default StoreModule
