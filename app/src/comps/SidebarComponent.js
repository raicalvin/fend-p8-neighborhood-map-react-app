import React, { Component } from "react";
import Input from "./InputComponent";
import ListItem from "./ListItemComponent";

class Sidebar extends Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
    console.log("something changed");
  };

  render() {
    return (
      <div id="sidebar">
        <div id="input-field" className="flex-container flex-container-center">
          <input
            type="text"
            name="fname"
            placeholder="Filter results..."
            className="input-field-filter"
            value={this.state.query}
            onChange={e => this.updateQuery(e.target.value)}
          />
        </div>
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
