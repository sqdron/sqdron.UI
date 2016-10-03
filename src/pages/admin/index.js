import React from 'react'
import { AppBar, MenuItem, Drawer } from 'material-ui'
import { Link } from 'react-router'
import Dashboard from 'material-ui/svg-icons/action/dashboard'
import Folder from 'material-ui/svg-icons/file/folder-open'
import Applications from 'material-ui/svg-icons/hardware/developer-board'
import Storage from 'material-ui/svg-icons/device/storage'
import Settings from 'material-ui/svg-icons/action/settings'

export Repository from './repository'
export Dashboard from './dashboard'
export Applications from './applications'
export Hardware from './hardware'
export Settings from './settings'

class Admin extends React.Component {
  static propTypes = {
    children : React.PropTypes.object
  }

  constructor() {
    super()
    this.state = { open: false }
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { children } = this.props
    return <div>

      <Drawer docked open={this.state.open} onRequestChange={(open) => this.setState({ open })}>
        <Link to='/admin'><MenuItem primaryText='Dashboard' onTouchTap={this.handleClose}
          leftIcon={<Dashboard />}/></Link>
        <Link to='/admin/repository'><MenuItem primaryText='Repository' onTouchTap={this.handleClose}
          leftIcon={<Folder />}/></Link>
        <Link to='/admin/applications'><MenuItem primaryText='Applications' onTouchTap={this.handleClose}
          leftIcon={<Applications />}/></Link>
        <Link to='/admin/hardware'><MenuItem primaryText='Hardware' onTouchTap={this.handleClose}
          leftIcon={<Storage />}/></Link>
        <Link to='/admin/settings'><MenuItem primaryText='Settings' onTouchTap={this.handleClose}
          leftIcon={<Settings />}/></Link>
      </Drawer>
      <AppBar title='sqdron' onLeftIconButtonTouchTap={this.handleToggle}/>
      {children}
    </div>
  }
}

Admin.childContextTypes = {
  children : React.PropTypes.object.isRequired
}

export default Admin
