import React from "react";
import "./PostTopic.css";

export default class PostTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category || "",
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.post = this.post.bind(this);
  }
  post(ev) {
    ev.preventDefault();
    this.props.post(this.state.category, this.state.name);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div className="PostTopic">
        <form onSubmit={this.post}>
          <h1>Post a new topic</h1>
          <label>category</label>
          <input
            type="text"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          />

          <label>Text</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <button>Post</button>
          <button
            type="button"
            onClick={ev => {
              ev.preventDefault();
              this.props.cancel();
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
