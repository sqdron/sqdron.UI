const AccountApi = {
  signup(userData) {
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
    var url = new URL(BACKEND_API)
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return fetch(url, {
      method : 'post',
      headers : {
        'Content-type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}

export default AccountApi
