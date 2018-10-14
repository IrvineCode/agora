import React, { Component } from "react";

class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="TopNav">
        <span className="logo">Agora</span>
        <div style={{ display: "flex" }}>
          <span className="vcenter" style={{ marginRight: "15px" }}>
            hi, <b>{this.props.user.email.split("@")[0]}</b>
          </span>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default TopNav;
