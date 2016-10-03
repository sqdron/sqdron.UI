import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Master } from '../layouts'
import Landing from './landing'
import { NotFound } from './notFound'
import { Login } from './login'
import Admin, { Repository, Dashboard, Applications, Hardware, Settings } from './admin'

export default (
  <Route path='/' component={Master}>
    <IndexRoute component={Landing}/>
    <Route path='/login' component={Login}/>
    <Route path='/admin' component={Admin}>
      <IndexRoute component={Dashboard}/>
      <Route path='/admin/repository' component={Repository}/>
      <Route path='/admin/applications' component={Applications}/>
      <Route path='/admin/hardware' component={Hardware}/>
      <Route path='/admin/settings' component={Settings}/>
    </Route>
    <Route path='*' component={NotFound} status={404}/>
  </Route>
)

