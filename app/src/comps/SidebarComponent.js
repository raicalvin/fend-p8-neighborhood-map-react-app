import React, { Component } from "react";
import Input from "./InputComponent";
import ListItem from "./ListItemComponent";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <Input />
        <div id="sidebar-list">
          <ul>
            {this.props.places.map(place => (
              <li key={place.id}>
                <button className="list-item flex-container-list-item">
                  <span className="list-item-span">{place.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
