export const HotModule = (accept) => {
  return {
    init : (ctx) => accept(ctx)
  }
}

export default HotModule
