import React, { Component } from "react";
import "./App.css";
import Header from "./comps/HeaderComponent.js";
import Footer from "./comps/FooterComponent.js";
import Content from "./comps/ContentComponent";

class App extends Component {
  state = {
    places: [
      {
        title: "Kurama-Dera Temple",
        location: { lat: 35.121843, lng: 135.762905 },
        id: "kdt4305"
      },
      {
        title: "Fushimi Inari-taisha",
        location: { lat: 34.967143, lng: 135.772673 },
        id: "fit4373"
      },
      {
        title: "Arashiyama",
        location: { lat: 35.009452, lng: 135.666775 },
        id: "ara5275"
      },
      {
        title: "Gion",
        location: { lat: 35.003764, lng: 135.77718 },
        id: "gio6418"
      },
      {
        title: "Nijo Castle",
        location: { lat: 35.014072, lng: 135.747578 },
        id: "nca7278"
      },
      {
        title: "Saihō-ji",
        location: { lat: 34.991962, lng: 135.683288 },
        id: "sji6288"
      },
      {
        title: "Kyoto Imperial Palace",
        location: { lat: 35.025413, lng: 135.762126 },
        id: "kip1326"
      },
      {
        title: "Nishiki Market",
        location: { lat: 35.005007, lng: 135.764899 },
        id: "nma0799"
      },
      {
        title: "Tō-ji",
        location: { lat: 34.981118, lng: 135.747596 },
        id: "tji1896"
      },
      {
        title: "Kyoto Tower",
        location: { lat: 34.987573, lng: 135.759333 },
        id: "kto7333"
      },
      {
        title: "Philosopher's Walk (Tetsugaku-no-michi)",
        location: { lat: 35.021484, lng: 135.794207 },
        id: "tnm8407"
      },
      {
        title: "Maruyama Park",
        location: { lat: 35.003882, lng: 135.780917 },
        id: "mpa8217"
      },
      {
        title: "Kyoto International Manga Museum",
        location: { lat: 35.01194, lng: 135.759274 },
        id: "kim9474"
      }
    ],
    markers: [],
    sights: [],
    mainMap: null,
    mainInfoWindow: null,
    nearby: []
  };

  componentDidMount() {
    this.getFourquareData();
  }

  renderMap() {
    const apiKey = "AIzaSyAlIenynkE5AszSbeQJF_9qS2X_xGIi2zQ";
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
    );
    window.initMap = this.initMap.bind(this);
  }

  organizeFoursquareData(data) {
    let organizedData = [];
    /* Grab first three nearby sights for each location, if exists */
    data.forEach(dt => {
      let obj = {};
      let nearby = [];
      if (dt.s.length >= 3) {
        obj.loc = dt.loc;
        for (let i = 0; i < 3; i++) {
          nearby.push({
            sight: dt.s[i].venue.name,
            address: dt.s[i].venue.location.address
          });
        }
        obj.near = nearby;
      }
      organizedData.push(obj);
    });
    this.setState({ nearby: organizedData });
  }

  getFourquareData() {
    /* Setup the parameters and endpoint */
    let endpoint = "https://api.foursquare.com/v2/venues/explore?";
    let url;
    let urls = [];
    let params = {
      query: "sights",
      client_id: "SK5EVPKEL2Q5CDBOQRTZ0EQWCV43YW2QJU3L3WQ0BLGMCLCI",
      client_secret: "IBNJBM015XAHHQCYPLDBZVGCWJ5BQUXNQVWMBW4QDGJ0LU5I",
      ll: "",
      v: 20180323
    };

    /* Create a list of urls for each of the 13 places */
    this.state.places.forEach(place => {
      let lat = place.location.lat;
      let lng = place.location.lng;
      params.ll = lat + "," + lng;
      url = endpoint + new URLSearchParams(params);
      urls.push(url);
    });

    /* Initialize empty array to store sub-arrays of sights near each of 13 places */
    let allSights = [];

    /* Use Promises to fetch urls, convert to JSON, and store in allSights array */
    Promise.all(urls.map(url => fetch(url)))
      .then(resolved => {
        Promise.all(resolved.map(res => res.json()))
          .then(r => {
            r.forEach((sights, index) => {
              let s = sights.response.groups[0].items;
              /* Create object here with name and the array and push */
              let obj = {
                loc: this.state.places[index].title,
                s: s
              };
              allSights.push(obj);
            });
            this.organizeFoursquareData(allSights);
            this.setState(
              // This is called when fetch/promises all resolve
              {
                sights: allSights
              },
              // Callback when setState() is complete
              this.renderMap()
            );
          })
          .catch(err => {
            console.log(
              `An error occured while parsing the FourSquare API: ${err}`
            );
          });
      })
      .catch(err => {
        console.log(
          `An error occured while fetching the FourSquare data: ${err}`
        );
      });
  }

  populateInfoWindow(place, inWin, map, marker, near) {
    let nearbyContent = "";
    let nearbyToThisPlace = near.find(element => {
      return element.loc.trim() === place.trim();
    });

    nearbyToThisPlace.near.forEach((nr, index) => {
      nearbyContent +=
        `<div>${index + 1}. ${nr.sight}</div>` + `<div>${nr.address}</div>`;
    });

    /* Set the content to be placed in InfoWindow */
    let content =
      `<div id="info-window-title"><b>${place}</b></div>` +
      `<div id="info-window-sub-heading">Places Nearby:</div>` +
      nearbyContent +
      `<div id="info-window-footer"><i>Places Nearby</i> provided by FourSquare API</div>`;

    inWin.setContent(content);
    inWin.open(map, marker);
  }

  initMap() {
    /* Create new Google Map */
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.02107, lng: 135.75385 },
      zoom: 10
    });

    /* Create bounds object to hold bounds of map as markers are created */
    let bounds = new window.google.maps.LatLngBounds();

    /* Create InfoWindow outside of Loop */
    var infoWindow = new window.google.maps.InfoWindow();
    var listOfMarkers = []; // Empty array to hold markers

    let nearbyLocations = this.state.nearby;

    /* Loop through each place and create marker with clickListener */
    this.state.places.map(place => {
      /* Create a marker */
      var marker = new window.google.maps.Marker({
        position: { lat: place.location.lat, lng: place.location.lng },
        map: map,
        title: place.title,
        animation: window.google.maps.Animation.DROP
      });

      // Pass the populateInfoWindow to the marker object, but don't invoke right now
      marker.popInfoWin = this.populateInfoWindow;

      /* Add click listener to open marker infoWindow */
      marker.addListener("click", function() {
        // this.populateInfoWindow(infoWindow, marker, place);
        this.popInfoWin(place.title, infoWindow, map, this, nearbyLocations);
        /* Add bounce animation to marker when clicked */
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(function() {
          marker.setAnimation(null);
        }, 750);
      });

      bounds.extend(marker.position); // Extend bounds to capture latest marker

      listOfMarkers.push(marker);
    });

    /* Update markers in state with list of newly created markers */
    this.setState({
      markers: listOfMarkers,
      mainMap: map,
      mainInfoWindow: infoWindow
    });
    /* Make the map fit itself to the bounds of the furthest markers */
    map.fitBounds(bounds);
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Content
          places={this.state.places}
          markers={this.state.markers}
          mainMap={this.state.mainMap}
          mainInfoWindow={this.state.mainInfoWindow}
          near={this.state.nearby}
          popInfoWin={this.populateInfoWindow.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}

function loadScript(url) {
  // We are just creating the script element and giving it the url
  // and also adding the async and defer attributes to the element
  let ref = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script"); // create the script element
  script.src = url;
  script.async = true;
  script.defer = true;
  ref.parentNode.insertBefore(script, ref);
}

export default App;
