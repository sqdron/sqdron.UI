import { LOCATION_CHANGE } from 'react-router-redux'
import { combineReducers } from 'redux-immutablejs'
import Immutable from 'immutable'

const initialState = Immutable.fromJS({ locationBeforeTransitions: null })

let routerReducer = (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({ locationBeforeTransitions: action.payload })
  }
  return state
}

export default (ctx) => {
  return combineReducers({ router: routerReducer, ...ctx.reducers })
}
