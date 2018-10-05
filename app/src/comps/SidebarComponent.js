import React, { Component } from "react";
import Input from "./InputComponent";
import ListItem from "./ListItemComponent";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class Sidebar extends Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({ query: query /*.trim()*/ });
  };

  updateMarkers(results) {
    let originalMarkers = this.props.markers;
    /* First set all markers to null map */
    originalMarkers.forEach(marker => {
      marker.setMap(null);
    });
    let markersToShow = [];
    /* Find markers to make map visible to */
    results.forEach(result => {
      originalMarkers.forEach(marker => {
        if (result.title == marker.title) {
          markersToShow.push(marker);
        }
      });
    });
    /* Set map to markers that need to be shown */
    markersToShow.forEach(marker => {
      marker.setMap(this.props.mainMap);
    });
  }

  displayAllMaps() {
    this.props.markers.forEach(marker => {
      marker.setMap(this.props.mainMap);
    });
  }

  placeButtonClicked(placeTitle) {
    let originalMarkers = this.props.markers;
    let clickedMarker = originalMarkers.find(marker => {
      return marker.title.trim() === placeTitle.trim();
    });
    this.props.mainInfoWindow.open(this.props.mainMap, clickedMarker);
    this.props.mainInfoWindow.setContent("Waddupp");
    /* Add bounce animation to marker when clicked */
    clickedMarker.setAnimation(window.google.maps.Animation.BOUNCE);
    setTimeout(function() {
      clickedMarker.setAnimation(null);
    }, 750);
  }

  render() {
    /* Filter results when user searches in input field */
    let filteringResults;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), "i");
      filteringResults = this.props.places.filter(place =>
        match.test(place.title)
      );
      this.updateMarkers(filteringResults);
    } else {
      filteringResults = this.props.places;
      /*Set all markers maps to map*/
      this.displayAllMaps();
    }
    filteringResults.sort(sortBy("title"));

    /* Returned UI from the render() method */
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
                <button
                  className="list-item flex-container-list-item"
                  onClick={e => this.placeButtonClicked(e.target.innerText)}
                >
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
