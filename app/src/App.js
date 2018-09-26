import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="header">
          <span>KYOTO EXPLORE</span>
        </div>
        <div id="content">
          <div id="sidebar">
            <div className="blank-item" />
            <div className="blank-item" />
            <div className="blank-item" />
            <div className="blank-item" />
            <div className="blank-item" />
            <div className="blank-item" />
            <div className="blank-item" />
            <div className="blank-item" />
          </div>
          <div id="map" />
        </div>
        <div id="footer">
          <span>Made with LOVE. And React. By Calvin.</span>
        </div>
      </div>
    );
  }
}

export default App;
