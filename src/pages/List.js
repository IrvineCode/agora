import React from "react";
import "./List.css";
import PostTopic from "./PostTopic";

function Topic({ topic, voteUp, voteDown, isWatched, toggleWatch }) {
  const colors = {
    sports: "dodgerblue",
    entertainment: "hotpink",
    education: "purple",
    politics: "orange"
  };
  return (
    <div className="topic">
      <div>
        <i
          className={isWatched ? "fas fa-star" : "far fa-star"}
          onClick={toggleWatch}
          style={{}}
        />
      </div>
      <div>
        <label style={{ background: colors[topic.category] }}>
          {topic.category}
        </label>
        <div className="title">{topic.name}</div>
      </div>
      <div className="boxes">
        <div className="up" onClick={voteUp}>
          {topic.up}
        </div>
        <div className="down" onClick={voteDown}>
          {topic.down}
        </div>
      </div>
    </div>
  );
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      showPost: false,
      watched: { 1: true, 3: true }
    };
    this.vote = this.vote.bind(this);
    this.post = this.post.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
  }
  toggleWatch(topicid) {
    console.log(topicid);
    let watched = { ...this.state.watched };
    if (topicid in watched) {
      delete watched[topicid];
    } else {
      watched[topicid] = true;
    }

    this.setState({ watched });
  }
  post(category, name) {
    const newTopic = {
      category,
      name,
      id: new Date().getTime(),
      up: 0,
      down: 0
    };
    console.log(newTopic);
    this.setState(state => {
      return {
        topics: [...state.topics, newTopic],
        showPost: false
      };
    });
  }
  componentDidMount() {
    this.loadList();
  }
  vote(topicId, upDown) {
    this.setState(state => {
      return {
        topics: state.topics.map(t => {
          if (t.id !== topicId) return t;
          else
            return {
              ...t,
              [upDown]: t[upDown] + 1
            };
        })
      };
    });
  }
  loadList() {
    this.setState({
      topics: [
        {
          name: "Should the Electoral College be abolished?",
          category: "politics"
        },
        {
          name: "Should the age limit for voting be lowered?",
          category: "politics"
        },
        {
          name: "Should the minimum legal driving age be raised?",
          category: "politics"
        },
        {
          name: "Should nuclear weapons be abolished?",
          category: "politics"
        },
        {
          name:
            "Should Brett Kavanaugh be inducted as a Supreme Court Justice?",
          category: "politics"
        },
        {
          name: "Michelle Obama launches Global Girls Initiative",
          category: "politics"
        },
        {
          name: "Do schools kill creativity?",
          category: "education"
        },
        {
          name:
            "Are standardized tests a correct measurement for students' intelligence? ",
          category: "education"
        },
        {
          name: "Should schools block social media?",
          category: "education"
        },
        {
          name: "Should school dress codes be banned?",
          category: "education"
        },
        {
          name: "Do you understand the math you are learning in class?",
          category: "education"
        },

        {
          name: "AP Chemistry is the hardest course",
          category: "education"
        },
        {
          name: "Should college athletes be paid?",
          category: "sports"
        },
        {
          name: "Competitive sport does more harm than good to students",
          category: "sports"
        },
        {
          name: "Should video gaming be considered a spoprt?",
          category: "sports"
        },
        { name: "Brewers are the NL Central Champions!", category: "sports" },
        { name: "Is Lebron the best player in the NBA?", category: "sports" },

        {
          name: "Do you want to watch the next Superman movie?",
          category: "entertainment"
        },

        {
          name: "New iPhone XS and XS Max released today!",
          category: "entertainment"
        }
      ].map((obj, i) => ({
        ...obj,
        id: i,
        up: parseInt(Math.random() * 20, 10),
        down: parseInt(Math.random() * 20, 10)
      }))
    });
  }
  render() {
    const filtered =
      this.props.category === "all"
        ? this.state.topics
        : this.state.topics.filter(t => t.category === this.props.category);
    return (
      <div className="List">
        <div className="topics">
          {filtered.map(topic => (
            <Topic
              key={topic.id}
              topic={topic}
              voteUp={() => this.vote(topic.id, "up")}
              voteDown={() => this.vote(topic.id, "down")}
              isWatched={!!this.state.watched[topic.id]}
              toggleWatch={() => this.toggleWatch(topic.id)}
            />
          ))}
        </div>
        <button
          onClick={() =>
            this.setState(state => ({ showPost: !state.showPost }))
          }
        >
          Post +
        </button>
        {this.state.showPost && (
          <PostTopic
            category={this.category}
            post={this.post}
            cancel={() => this.setState({ showPost: false })}
          />
        )}
      </div>
    );
  }
}

export default List;
