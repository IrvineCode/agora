import React, { Component } from "react";
import "./App.css";
import { firebase } from "./utils/firebase";
import FrontPage from "./pages/FrontPage";
import Gate from "./pages/Gate";

class App extends Component {
  constructor() {
    super();
    this.state = { user: undefined, post: undefined };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user });
    });
  }
  render() {
    if (this.state.user) {
      return <FrontPage user={this.state.user} />;
    } else {
      return <Gate />;
    }
  }
}

export default App;
