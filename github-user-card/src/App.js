import React from "react";
import logo from "./logo.svg";
import "./App.css";

import FollowerList from "./components/followerList";
import User from "./components/user";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User />
        <FollowerList />
      </header>
    </div>
  );
}

export default App;
