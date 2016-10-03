import React, { PropTypes } from 'react'
import '../../styles/next.css'
import classes from './master.css'
import '../../styles/core.css'

export const Master = ({ children }) => (
  <div className={classes.masterContainer}>
    {children}
  </div>
)

Master.propTypes = {
  children : PropTypes.node
}

export default Master