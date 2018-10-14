import React, { Component } from "react";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { setCategory } = this.props;
    return (
      <div className="SideNav">
        <h1>Categories</h1>
        <ul>
          <li>
            <a onClick={() => setCategory("all")}>All</a>
          </li>
          {["sports", "entertainment", "politics", "education"].map(
            (topic, i) => (
              <li key={i}>
                <a
                  onClick={() => setCategory(topic)}
                  style={{ textTransform: "capitalize" }}
                >
                  {topic}
                </a>
              </li>
            )
          )}
        </ul>

        <h1>Personal</h1>
        <ul>
          <li>My Posts</li>
          <li>Watched</li>
        </ul>
      </div>
    );
  }
}

export default SideNav;
