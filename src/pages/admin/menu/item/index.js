import React from "react";

class MenuItem extends React.Component {
  render() {
    return (
      <a href={this.props.link}>
        <div className="item-content">
          <div className="item-media">
            <i className="fa fa-home">
            </i>
          </div>
          <div className="item-inner">
            <span className="title">{this.props.title}</span>
          </div>
        </div>
      </a>
    );
  }
}

export default MenuItem
