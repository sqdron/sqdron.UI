import React from 'react'
import classes from './signupLayout.scss'
import '../../styles/core.scss'

export const Master = ({ children }) => (
  <div className='container text-center'>
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

Master.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default Master
