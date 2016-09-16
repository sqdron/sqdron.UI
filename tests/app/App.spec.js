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
    //
    it('Module should be registered', ()=> {
      _app.context.value = 5;
      _app.use((ctx)=>{
        ctx.value += 3;
      })
      expect(_app.module).to.be.a('function')
      _app.module(_app.context)
      expect(_app.context.value).to.equal(8)
    })
  })
})
