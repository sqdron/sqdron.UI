import React from 'react'
import './header.pcss'

const Header = ({ minimized }) => (
  <nav className={'navbar navbar-light bg-faded scrolling-navbar navbar-fixed-top ' +
    (minimized ? ' navbar-minimized' : '')}>
    <a className='navbar-toggler hidden-md-up'
      data-toggle='collapse' data-target='#collapsingNavbar'>
      <span className='sr-only'>Toggle navigation</span> <i className='material-icons'>dehaze</i>
    </a>
    <div className='container'>
      <div className='navbar-header'>
        <a href='index.html' className='navbar-brand'>
          <img src={require('../../../../assets/images/logo.png')} alt='sqdron'/>
        </a>
      </div>
      <div className='collapse navbar-toggleable-sm' id='collapsingNavbar'>
        <ul className='nav navbar-nav pull-sm-right'>
          <li className='nav-item'>
            <a className='nav-link' href='#section1'>Home <span className='sr-only'>(current)</span></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#section2'>Features</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Pricing</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  minimized : React.PropTypes.any
}

Header.defaultProps = {
  minimized : false
}

export default Header
