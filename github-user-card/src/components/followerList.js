import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import FollowerCard from "./followerCard";

class FollowerList extends Component {
  constructor() {
    super();
    this.state = {
      followers: [],
      post: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/karenjli/followers")
      .then(res => this.setState({ followers: res.data }))
      //.then(res => this.setState({ post: res.data.map(user => user.info) }))
      .then(res => console.log(this.state.followers))
      //.then(res => console.log(this.state.post))
      .catch(err => console.log(err));
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevState.followers !== this.state.followers) {
  //         const allLogin = []

  //       this.state.followers.map(user =>
  //          allLogin.push(user.login);
  //         axios
  //           .get(`https://api.github.com/users/${user.login}`)
  //           .then(res => this.setState({ post: res.data.login })),
  //       );
  //     }
  //   }

  //   SingleUser = () => {
  //     console.log(this.state.followers);
  //     this.state.followers.map(
  //       user =>
  //         //   console.log(user.login)
  //         axios
  //           .get(`https://api.github.com/users/${user.login}`)
  //           .then(res => console.log(res)),
  //       //.then(res => this.setState({ post: res.data })),
  //     );
  //   };

  //   getUserData() {
  //     this.state.followers.map(user =>
  //       axios
  //         .get(`https://api.github.com/users/${user.login}`)
  //         .then(res => this.setState({ post: res.data }))
  //         .then(res => <FollowerCard name={user.name} />),
  //     );
  //   }

  render() {
    console.log(this.state.post);
    return (
      <div className="follower-list">
        {/* {this.state.post.map(user => (
          <FollowerCard UserName={user.name} />
        ))} */}
        {this.state.followers.map(user => (
          <FollowerCard name={user.login} avatarUrl={user.avatar_url} />
        ))}
      </div>
    );
  }
}

export default FollowerList;
