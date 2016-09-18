import { routerMiddleware } from 'react-router-redux'
import { useRouterHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

export const RoutingModule = (basename, getRoutes) => {
  return {
    init : (ctx) => {
      console.log('Initialize Routing...')
      ctx.browserHistory = useRouterHistory(createBrowserHistory)({
        basename : basename
      })
      ctx.getRoutes = getRoutes
    },
    run : (ctx) => {
      console.log('Initialize Routing...')
      // ctx.reduce(router)
      ctx.middlewares = [...ctx.middlewares, routerMiddleware(ctx.browserHistory)]
    }
  }
}

export default RoutingModule
