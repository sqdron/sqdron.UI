export default class {
  /**
   * Initialize a new `Application`.
   *
   * @api public
   */
  constructor() {
    this.context = {}
    this.modulesInit = (ctx) => {}
    this.modulesRun = (ctx) => {}
  }

  use = (module) => {
    if (module.init) {
      this.modulesInit = compose(module.init, this.modulesInit)
    }
    if (module.run) {
      this.modulesRun = compose(module.run, this.modulesRun)
    }
  }

  run = () => {
    this.modulesInit(this.context)
    this.modulesRun(this.context)
  }
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  const last = funcs[funcs.length - 1]
  const rest = funcs.slice(0, -1)
  return (...args) => rest.reduceRight((composed, f) => f(...args), last(...args))
}
