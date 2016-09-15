import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Master } from '../layouts'
import { Landing } from './landing'
import { NotFound } from './notFound'
import { Login } from './login'
/*  Note: Instead of using JSX, we recommend using react-router
 PlainRoute objects to build route definitions.   */

export const createRoutes = () => (
  <Route path='/' component={Master}>
    <IndexRoute component={Landing}/>
    <Route path="/login" component={Login}/>
    <Route path="*" component={NotFound} status={404}/>
  </Route>
)
export default createRoutes

