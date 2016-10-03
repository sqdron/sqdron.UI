import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
import * as A from './github.actions'

export default createReducer(Immutable.fromJS({}), {
  [A.GITHUB_SIGN_IN_START] : (state) => {
    console.log('reducing...')
    console.log(state)
    // LoginApiCall.login(action.user, A.)
    return state.setIn(['github', 'loading'], true)
  },
  [A.OAUTH_SIGN_IN_COMPLETE] : (state) => state.mergeDeep({
    'github' : {
      loading : false,
      errors  : null
    }
  }),
  [A.OAUTH_SIGN_IN_ERROR] : (state, { errors }) => state.mergeDeep({
    'github' : {
      loading : false,
      errors
    }
  })
})
