import React from 'react'

export Repository from './repository'
export Dashboard from './dashboard'
export Applications from './applications'
export Hardware from './hardware'
export Settings from './settings'

import MenuList from './menu/list'
import Header from './header'

class Admin extends React.Component {
  static propTypes = {
    children: React.PropTypes.object
  };

  constructor() {
    super();
    this.state = {open: false}
  }

  render() {
    const {children} = this.props;
    return (
      <div className="admin-area-wrapper">
        <div id="app" className="lyt-2 app-navbar-fixed app-sidebar-fixed">
          <MenuList/>
          <div className="app-content">
            <Header/>
            <div className="main-content">
              <div className="wrap-content container" id="container">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Admin.childContextTypes = {
  children: React.PropTypes.object.isRequired
};

export default Admin
