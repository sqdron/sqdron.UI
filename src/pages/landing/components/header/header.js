import React from 'react'
import './header.pcss'

const Header = ({ minimized }) => (
  <nav id='mainNav' className='navbar navbar-default navbar-custom' data-spy='affix' data-offset-top='100'>
    <div className='container'>
      <div className='navbar-header page-scroll'>
        <a className='landing-menu-toggler btn btn-red hidden-sm hidden-md hidden-lg mobile-button navbar-toggle'
          data-toggle='collapse' data-target='#landing-navbar-collapse'>
          <span className='sr-only'>Toggle navigation</span> <i className='fa fa-bars'/>
        </a>
        <a href='index.html' className='navbar-brand'>
          <img src='../assets/images/logo.png' alt='Clip-Two'/>
        </a>
      </div>
      <div className='collapse navbar-collapse' id='landing-navbar-collapse'>
        <ul className='nav navbar-nav navbar-right'>
          <li className=''>
            <a className='page-scroll' href='#section-0'>Home</a>
          </li>
          <li className=''>
            <a className='page-scroll' href='#section-1'>Services</a>
          </li>
          <li>
            <a className='page-scroll' href='#section-3'>Team</a>
          </li>
          <li>
            <a className='page-scroll' href='#section-5'>Contact</a>
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
// <nav className={'navbar navbar-light bg-faded scrolling-navbar navbar-fixed-top ' +
// (minimized ? ' navbar-minimized' : '')}>
//   <a className='navbar-toggler hidden-md-up'
//      data-toggle='collapse' data-target='#collapsingNavbar'>
//     <span className='sr-only'>Toggle navigation</span> <i className='material-icons'>dehaze</i>
//   </a>
//   <div className='container'>
//     <div className='navbar-header'>
//       <a href='index.html' className='navbar-brand'>
//         <img src={require('../../../../assets/images/logo.png')} alt='sqdron'/>
//       </a>
//     </div>
//     <div className='collapse navbar-toggleable-sm' id='collapsingNavbar'>
//       <ul className='nav navbar-nav pull-sm-right'>
//         <li className='nav-item'>
//           <a className='nav-link' href='#section1'>Home <span className='sr-only'>(current)</span></a>
//         </li>
//         <li className='nav-item'>
//           <a className='nav-link' href='#section2'>Features</a>
//         </li>
//         <li className='nav-item'>
//           <a className='nav-link' href='#'>Pricing</a>
//         </li>
//         <li className='nav-item'>
//           <a className='nav-link' href='#'>About</a>
//         </li>
//         <li className='nav-item'>
//           <Link to='/login' >Login to sqdron</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
