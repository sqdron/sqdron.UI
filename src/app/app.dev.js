import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonitor from 'redux-slider-monitor'
import Inspector from 'redux-devtools-inspector'

export const DevModule = (devToolsExtension) => {
  return {
    init : (ctx) => {
      console.log('Initialize Dev Tools...')
      if (__DEBUG__) {
        if (typeof devToolsExtension === 'function') {
          ctx.enhance(devToolsExtension())
        }
      }

      if (__DEV__) {
        ctx.enhance(DevTools.instrument())
        ctx.renderAssets = [...ctx.renderAssets, <DevTools/>]
      }
    },
    run : (ctx) => {
      if (__DEV__) {
        console.log('Run Dev Tools...')
        let doRender = ctx.render
        ctx.render = () => {
          try {
            doRender()
          } catch (error) {
            const RedBox = require('redbox-react').default
            ctx.renderView(<RedBox error={error}/>)
          }
        }
      }
    }
  }
}

export const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q' changeMonitorKey='ctrl-m'
    defaultIsVisible={false}>
    <LogMonitor />
    <Inspector/>
    <SliderMonitor />
  </DockMonitor>
)

export default DevModule
