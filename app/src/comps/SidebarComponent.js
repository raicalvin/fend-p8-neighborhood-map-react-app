import React, { Component } from "react";
import Input from "./InputComponent";
import ListItem from "./ListItemComponent";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class Sidebar extends Component {
  state = {
    query: "",
    markers: []
  };

  updateQuery = query => {
    this.setState({ query: query /*.trim()*/ });
  };

  render() {
    /* === This section filters the results when user searches in the input field === */
    let filteringResults;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      filteringResults = this.props.places.filter(place =>
        match.test(place.title)
      );
    } else {
      filteringResults = this.props.places;
    }
    filteringResults.sort(sortBy("title"));

    // now for each place in the filteringResults array, create the markers and infowindows...

    /* === returned UI from the render() method === */
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
            {filteringResults.map(place => (
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
