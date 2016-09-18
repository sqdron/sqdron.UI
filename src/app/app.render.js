import React from 'react'
import Application from '../containers/application'

export const RenderModule = (render) => {
  return {
    init : (ctx) => {
      console.log('Initialize Rendering...')
      ctx.renderView = render
      ctx.renderAssets = []
    },
    run : (ctx) => {
      console.log('Run Rendering...')
      ctx.render = () => {
        const routes = ctx.getRoutes()
        ctx.renderView(<Application store={ctx.store} history={ctx.history}
          assets={ctx.renderAssets}
          routes={routes}/>)
      }
      ctx.render()
    }
  }
}
export default RenderModule

// export const RenderModule = (render) => {
//   return {
//     init : (ctx) => {
//       console.log('Initialize Rendering...')
//       ctx.render = render
//       ctx.renderAssets = []
//     },
//     run : (ctx) => {
//       console.log('Run Rendering...')
//       const routes = require('./pages/index').default()
//
//       // render(ctx, <application store={ctx.store} history={ctx.history} assets={ctx.renderAssets}
//       //   routes={ctx.getRoutes()}/>)
//       // render(ctx, null)
//     }
//   }
// }
// export default RenderModule
