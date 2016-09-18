import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

export default (ctx) => {
  return combineReducers({ router: routerReducer, ...ctx.reducers })
}
