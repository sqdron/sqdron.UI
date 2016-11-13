export const LANDING_SIGN_UP = 'LANDING_SIGN_UP'
import AccountApi from '../../../services/account.api'

export function LandingSignup () {
  return (dispatch, getState) => {
    dispatch(GithubSigninStart())
    signup()
    // GithubApi.login({ })
    //          .then(response => {
    //            if (response.status >= 200 && response.status < 300) {
    //              console.log(response)
    //            }
    //          })
    //          .catch(error => { console.log('request failed', error) })
  }
}

export function GithubSigninStart () {
  return { type : LANDING_SIGN_UP }
}

function signup () {
  AccountApi.login({}).then((r) => { console.log(r) })
    // .then(({ data }) => resolve(data))
    .catch(({ errors }) => console.log(errors))
}

// function listenForCredentials(endpointKey, popup, provider, resolve, reject) {
//   if (!resolve) {
//     return new Promise((resolve, reject) => {
//       listenForCredentials(endpointKey, popup, provider, resolve, reject);
//     });
//
//   } else {
//     fetch(getTokenValidationPath(endpointKey))
//       .then(parseResponse)
//       .then(({ data }) => resolve(data))
//       .catch(({ errors }) => reject({ errors }));
//   }
// }
