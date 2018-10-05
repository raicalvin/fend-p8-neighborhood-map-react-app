import React, { Component } from "react";
import Sidebar from "./SidebarComponent.js";
import Map from "./MapComponent.js";

class Content extends Component {
  render() {
    return (
      <div tabIndex="2" id="content" className="flex-container">
        <Sidebar
          places={this.props.places}
          markers={this.props.markers}
          mainMap={this.props.mainMap}
          mainInfoWindow={this.props.mainInfoWindow}
          near={this.props.near}
          popInfoWin={this.props.popInfoWin}
        />
        <Map />
      </div>
    );
  }
}

export default Content;
