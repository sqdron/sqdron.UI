const GithubApi = {
  login(userData) {
    console.log('Fetching...')
    const params = {
      client_id : '31cdb204cb11b6dbc1ed',
      redirect_uri : 'http://sqdron.com/auth',
      scope : 'email',
      state : 'test'
    }
    // const searchParams = Object.keys(params).map((key) => {
    //   return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    // }).join('&')
    var url = new URL('https://github.com/login/oauth/authorize')
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url
      // , {
      // method : 'get',
      // headers : {
      //   'Accept' : 'application/json',
      //   'Content-Type' : 'application/json'
      // },
      // body : searchParams
      // body : JSON.stringify({
      //   client_id : '31cdb204cb11b6dbc1ed',
      //   redirect_uri  : 'http://sqdron.com/auth',
      //   scope : 'email',
      //   state : 'test'
      // })
    // }
    )
  }
}

export default GithubApi
