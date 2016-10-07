import React from "react";
import MenuItem from "../item";

class MenuList extends React.Component {
  render() {
    let location = window.location.pathname;
    return (
      <div className="sidebar app-aside" id="sidebar">
        <div className="sidebar-container perfect-scrollbar">
          <div>
            <nav>
              <ul className="main-navigation-menu">
                <li className={location == '/admin' ? "active open" : ""}>
                  <MenuItem link="/admin" title="Dashboard"/>
                </li>
                <li className={location == '/admin/repository' ? "active open" : ""}>
                  <MenuItem link="/admin/repository" title="Repository"/>
                </li>
                <li className={location == '/admin/applications' ? "active open" : ""}>
                  <MenuItem link="/admin/applications" title="Applications"/>
                </li>
                <li className={location == '/admin/hardware' ? "active open" : ""}>
                  <MenuItem link="/admin/hardware" title="Hardware"/>
                </li>
                <li className={location == '/admin/settings' ? "active open" : ""}>
                  <MenuItem link="/admin/settings" title="Settings"/>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuList
