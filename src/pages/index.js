import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Master } from '../layouts'
import Landing from './landing'
import { NotFound } from './notFound'
import { Login } from './login'

export default (
  <Route path='/' component={Master}>
    <IndexRoute component={Landing}/>
    <Route path='/login' component={Login}/>
    <Route path='*' component={NotFound} status={404}/>
  </Route>
)

