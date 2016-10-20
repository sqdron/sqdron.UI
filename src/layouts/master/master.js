import React, { PropTypes } from 'react'

export const Master = ({ children }) => (
  <div>
    {children}
  </div>
)

Master.propTypes = {
  children : PropTypes.node
}

export default Master
