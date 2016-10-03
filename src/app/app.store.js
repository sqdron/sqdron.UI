import { applyMiddleware, compose, createStore } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import Immutable from 'immutable'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
const loggerMiddleware = createLogger()

export const StoreModule = (initialState = InitialState) => {
  return {
    init : (ctx) => {
      console.log('Initialize Store... ' + initialState)
      ctx.reducers = []
      ctx.middlewares = [thunkMiddleware, loggerMiddleware]
      ctx.enhancers = []
      ctx.reduce = (reducer) => { ctx.reducers = [...ctx.reducers, reducer] }
      ctx.enhance = (...enhancer) => { ctx.enhancers = [...ctx.enhancers, ...enhancer] }
      ctx.reload = () => {
        ctx.store.replaceReducer(require('./reduce').default(ctx))
      }
    },
    run : (ctx) => {
      console.log('Run Store...')
      ctx.store = createStore(
        require('./reduce').default(ctx),
        initialState,
        compose(
          applyMiddleware(...ctx.middlewares),
          ...ctx.enhancers
        ))

      ctx.store.addReducer = (r) => {
        ctx.reduce(r)
      }

      ctx.history = syncHistoryWithStore(ctx.browserHistory, ctx.store, {
        selectLocationState : (state) => state.get('router').toJS()
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

const InitialState = Immutable.fromJS({ locationBeforeTransitions: null })

export default StoreModule
