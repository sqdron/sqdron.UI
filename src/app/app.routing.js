import { routerMiddleware } from 'react-router-redux'
import { useRouterHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

// import Application from './app'
export const RoutingModule = (basename) => {
  return (ctx) => {
    // ========================================================
    // Browser History Setup
    // ========================================================
    const history = useRouterHistory(createBrowserHistory)({
      basename : basename
    })

    ctx.history = history
    ctx.middleware = [...ctx.middleware, routerMiddleware(history)]
  }
}

export default RoutingModule
