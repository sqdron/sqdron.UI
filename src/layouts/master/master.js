import React from 'react'
import classes from './master.scss'
import '../../styles/core.scss'

export const Master = ({children}) => (
  <div className={classes.masterContainer}>
    {children}
  </div>
)

Master.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default Master
