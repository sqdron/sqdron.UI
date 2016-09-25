import React from 'react'
import classes from './form.css'
import TextField from 'material-ui/TextField'

export default () => (
  <div className={classes.form}>
    <div className={classes.container}>
      <form>
        <TextField className={classes.loginInput} hintText='Hint Text'/>
      </form>
    </div>
  </div>
)
