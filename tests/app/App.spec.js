import App from 'app/app'

describe('(App) Configuration', () => {
  let _app

  beforeEach(() => {
    _app = new App()
  })

  it('Should define an app object', () => {
    expect(_app).to.be.a('object')
  })

  describe('(Module)', () => {
    it('Should be a function.', () => {
      expect(_app.use).to.be.a('function')
    })
  })
})
