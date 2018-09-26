import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="header" className="flex-container flex-container-center">
          <span>KYOTO EXPLORE</span>
        </div>
        <div id="content">
          <div id="sidebar">
            <div id="input-field">
              <input type="text" name="fname" className="input-field-filter" />
            </div>
            <div id="sidebar-list">
              <ul>
                <li>
                  <div className="blank-item" />
                </li>
                <li>
                  <div className="blank-item" />
                </li>
                <li>
                  <div className="blank-item" />
                </li>
                <li>
                  <div className="blank-item" />
                </li>
                <li>
                  <div className="blank-item" />
                </li>
              </ul>
            </div>
          </div>
          <div id="map" />
        </div>
        <div id="footer" className="flex-container flex-container-center">
          <span>Made with LOVE. And React. By Calvin.</span>
        </div>
      </div>
    );
  }
}

export default App;
