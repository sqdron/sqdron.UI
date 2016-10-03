const GithubApi = {
  login(userData) {
    return fetch('http://localhost/login', {
      method  : 'post',
      headers : {
        'Accept'       : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        email    : userData.email,
        password : userData.password
      })
    })
      // .then(response => {
      //   if (response.status >= 200 && response.status < 300) {
      //     console.log(response);
      //     onSuccess(response)
      //   } else {
      //     const error = new Error(response.statusText)
      //     error.response = response
      //     onError()
      //     throw error
      //   }
      // })
      // .catch(error => { console.log('request failed', error) })
  }
}

export default GithubApi
