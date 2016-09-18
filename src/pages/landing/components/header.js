import React from 'react'
import classes from './header.scss'
import { Link } from 'react-router'

export default () => (
  <header className={classes.header}>
    <div role='navigation' className='navbar navbar-white'>
      <div className='container'>
        <div className='navbar-header'/>
        <div className='navbar-collapse collapse'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)
