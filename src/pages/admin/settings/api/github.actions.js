export const GITHUB_SIGN_IN_START = 'GITHUB_SIGN_IN_START'
export const GITHUB_SIGN_IN_COMPLETE = 'GITHUB_SIGN_IN_COMPLETE'
export const GITHUB_SIGN_IN_ERROR = 'GITHUB_SIGN_IN_ERROR'
import GithubApi from '../../../../services/github.api'

export function GithubSignin() {
  return (dispatch, getState) => {
    // const { counter } = getState()
    //
    // if (counter % 2 === 0) {
    //   return;
    // }
    GithubApi.login({ email: 'emm@mmd.dd', password: 'ppppp' })
    dispatch(GithubSigninStart())
  }
  // return { type: GITHUB_SIGN_IN_START }
}

export function GithubSigninStart() {
  return { type: GITHUB_SIGN_IN_START }
}
