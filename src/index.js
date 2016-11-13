import ReactDOM from 'react-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './app/app'
import { StoreModule, RoutingModule, RenderModule, DevModule, HotModule } from './app'

injectTapEventPlugin()

const MOUNT_NODE = document.getElementById('root')

var app = new App()

app.use(RoutingModule(__BASENAME__, () => require('./pages/index').default))
app.use(StoreModule(window.___INITIAL_STATE__))

app.use(RenderModule((view) => {
  ReactDOM.unmountComponentAtNode(MOUNT_NODE)
  ReactDOM.render(view, MOUNT_NODE)
}))

app.use(DevModule(window.devToolsExtension))

app.use(HotModule((ctx) => {
  if (module.hot) {
    module.hot.accept('./pages/index', () => { ctx.render(ctx) })
  }
}))

app.run()
