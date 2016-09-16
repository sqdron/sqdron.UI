export default class {
  /**
   * Initialize a new `Application`.
   *
   * @api public
   */
  constructor () {
    this.context = {}
    this.renderFunc = (ctx) => {
    }
    this.middleware = (ctx) => {
    }
  }

  render = () => {
    this.renderFunc(this.context)
  }

  use = (m) => {
    // this.middleware = compose(this.middleware, m)
  }

  run = () => {
    // this.middleware(this.context)
  }
}

function compose (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  const last = funcs[funcs.length - 1]
  const rest = funcs.slice(0, -1)
  return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args))
}
