import React, { PropTypes } from 'react'
// import '../../styles/next.css'
// import classes from './master.css'
// import '../../styles/core.css'
// import '../../styles/vendor.scss'

export const Master = ({ children }) => (
  <div>
    {children}
  </div>
)

Master.propTypes = {
  children : PropTypes.node
}

export default Master
