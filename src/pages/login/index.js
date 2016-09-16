import React from 'react'
import classes from './classes.scss'
import { Header, Form } from './components'

export const Login = () => (
  <div className={classes.login}>
    <Header/>
    <Form/>
  </div>
)

export default Login
