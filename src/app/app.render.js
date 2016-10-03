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
      ctx.reload()
    }
  }
}
export default RenderModule
