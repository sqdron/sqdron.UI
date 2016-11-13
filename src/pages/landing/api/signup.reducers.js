import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
import * as A from './signup.actions'

export default createReducer(Immutable.fromJS({}), {
  [A.LANDING_SIGN_UP] : (state) => {
    console.log('reducing...')
    console.log(state)
    return state.setIn(['github', 'loading'], true)
  }
  // ,
  // [A.OAUTH_SIGN_IN_COMPLETE] : (state) => state.mergeDeep({
  //   'github' : {
  //     loading : false,
  //     errors  : null
  //   }
  // })
})
