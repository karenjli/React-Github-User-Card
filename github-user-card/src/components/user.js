import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/karenjli")
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="userProfile">
        <img src={this.state.user.avatar_url} className="profileImage" />
        <div className="userInfoWords">
          <h2>Name: {this.state.user.name}</h2>
          <h4>Location: {this.state.user.location}</h4>
          <h4>Followers: {this.state.user.followers}</h4>
          <h4>Following: {this.state.user.following}</h4>
          <h4>Bio: {this.state.user.bio}</h4>
        </div>
      </div>
    );
  }
}

export default User;
