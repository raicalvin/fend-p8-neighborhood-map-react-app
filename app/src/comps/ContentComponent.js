import React, { Component } from "react";
import Sidebar from "./SidebarComponent.js";
import Map from "./MapComponent.js";

class Content extends Component {
  render() {
    return (
      <div id="content" className="flex-container">
        <Sidebar places={this.props.places} />
        <Map />
      </div>
    );
  }
}

export default Content;
