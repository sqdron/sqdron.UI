export const GITHUB_SIGN_IN_START = 'GITHUB_SIGN_IN_START'
export const GITHUB_SIGN_IN_COMPLETE = 'GITHUB_SIGN_IN_COMPLETE'
export const GITHUB_SIGN_IN_ERROR = 'GITHUB_SIGN_IN_ERROR'
// import GithubApi from '../../../../services/github.api'

export function GithubSignin() {
  return (dispatch, getState) => {
    dispatch(GithubSigninStart())
    authenticate()
    // GithubApi.login({ })
    //          .then(response => {
    //            if (response.status >= 200 && response.status < 300) {
    //              console.log(response)
    //            }
    //          })
    //          .catch(error => { console.log('request failed', error) })
  }
}

export function GithubSigninStart() {
  return { type : GITHUB_SIGN_IN_START }
}

function authenticate() {
  const params = {
    client_id : '31cdb204cb11b6dbc1ed',
    redirect_uri : 'http://sqdron.io/auth',
    scope : 'email repo read:org',
    state : 'test'
  }
  var url = new URL('https://github.com/login/oauth/authorize')
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  window.open(url, '_blank', null, null)
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
