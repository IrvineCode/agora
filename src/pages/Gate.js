import React from "react";
import "./Gate.css";
import { firebase } from "../utils/firebase";

class Gate extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      displayname: "",
      mode: "signup",
      errMsg: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }
  async login(event) {
    event.preventDefault();
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);
    } catch (e) {
      this.setState({ errMsg: e.message });
    }
  }
  async signup(event) {
    event.preventDefault();
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password);
    } catch (e) {
      this.setState({ errMsg: e.message });
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div className="Gate">
        <div>
          <h1>AGORA</h1>
          <p>what's your opinion?</p>
        </div>
        <form>
          <div className="errMsg">{this.state.errMsg}</div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          {this.state.mode === "signup" && (
            <div>
              <label>displayname</label>
              <input
                type="text"
                name="username"
                value={this.state.displayname}
                onChange={this.handleChange}
              />
            </div>
          )}
          {this.state.mode === "signup" && (
            <div>
              <button onClick={this.signup}>Sign Up</button>
              <a
                onClick={() => {
                  this.setState({ mode: "login" });
                }}
              >
                If you already have an account, log in
              </a>
            </div>
          )}

          {this.state.mode === "login" && (
            <div>
              <button onClick={this.login}>Login</button>
              <a
                onClick={() => {
                  this.setState({ mode: "signup" });
                }}
              >
                If you don't have an account, sign up
              </a>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Gate;
