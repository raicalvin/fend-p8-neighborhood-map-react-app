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
    mainMap: null
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

    /* Limit the urls to just 3 places to limit quota requests */
    /* DELETE THIS LINE AFTER PROJECT IS DONE */
    urls = urls.slice(0, 3);

    /* Use Promises to fetch urls, convert to JSON, and store in allSights array */
    Promise.all(urls.map(url => fetch(url))).then(resolved => {
      Promise.all(resolved.map(res => res.json())).then(r => {
        r.forEach(sights => {
          let s = sights.response.groups[0].items;
          allSights.push(s);
        });
        this.setState(
          // This is called when fetch/promises all resolve
          {
            sights: allSights
          },
          // This is being called when setState() is complete
          this.renderMap()
        );
      });
    });
  }

  initMap() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.02107, lng: 135.75385 },
      zoom: 10
    });
    console.log(this.state);
    /* Create InfoWindow outside of Loop */
    var infoWindow = new window.google.maps.InfoWindow();
    var listOfMarkers = []; // Empty array to hold markers
    this.state.places.map(place => {
      /* Create a marker */
      var marker = new window.google.maps.Marker({
        position: { lat: place.location.lat, lng: place.location.lng },
        map: map,
        title: place.title,
        animation: window.google.maps.Animation.DROP
      });

      /* Add click listener to open marker infoWindow */
      marker.addListener("click", function() {
        infoWindow.setContent(`Hello ${place.title}`);
        infoWindow.open(map, marker);
        /* Add bounce animation to marker when clicked */
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        setTimeout(function() {
          marker.setAnimation(null);
        }, 750);
      });
      listOfMarkers.push(marker);
    });
    /* Update markers in state with list of newly created markers */
    this.setState({
      markers: listOfMarkers,
      mainMap: map
    });
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Content
          places={this.state.places}
          markers={this.state.markers}
          mainMap={this.state.mainMap}
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
