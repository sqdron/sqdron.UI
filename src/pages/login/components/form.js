import React from 'react'
import classes from './form.scss'
import TextField from 'material-ui/TextField';

export default () => (
  <div className={classes.form}>
    <div className={classes.container}>
      <form>
        <TextField className={classes.loginInput} hintText="Hint Text"></TextField>
      </form>
    </div>
  </div>
)