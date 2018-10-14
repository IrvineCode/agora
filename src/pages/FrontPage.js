import React from "react";
import { firebase } from "../utils/firebase";
import TopNav from "../pages/TopNav";
import SideNav from "../pages/SideNav";
import List from "./List";
import App from "../App";

import "./FrontPage.css";

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all"
    };
    this.logout = this.logout.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }
  componentDidMount() {}
  setCategory(category) {
    this.setState({ category });
  }
  logout() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <div className="FrontPage">
        <SideNav setCategory={this.setCategory} />
        {/*the side menu that has different topics like politics, science*/}
        <TopNav user={this.props.user} logout={this.logout} />{" "}
        {/*top menu idk what goes in*/}
        <div className="main">
          <h1>List - {this.state.category}</h1>
          <List category={this.state.category} />
        </div>
      </div>
    );
  }
}

export default FrontPage;
