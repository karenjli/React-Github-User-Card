import React from "react";

export default function FollowerCard(props) {
  return (
    <div className="follower-card">
      <img src={props.avatarUrl} />
      <h2>UserName: {props.name}</h2>
      {/* <h4>Location: {props.location}</h4>
      <h4>Followers: {props.followers}</h4>
      <h4>Following: {props.following}</h4>
      <h4>Bio: {props.bio}</h4> */}
    </div>
  );
}
