import React, { Component } from "react";
import "./App.css";
import Header from "./comps/HeaderComponent.js";
import Footer from "./comps/FooterComponent.js";
import Content from "./comps/ContentComponent";
/* Initial array of locations with their latlongs */
var places = [
  {
    title: "Kurama-Dera Temple",
    location: { lat: 35.121843, lng: 135.762905 }
  },
  {
    title: "Fushimi Inari-taisha",
    location: { lat: 34.967143, lng: 135.772673 }
  },
  {
    title: "Arashiyama",
    location: { lat: 35.009452, lng: 135.666775 }
  },
  {
    title: "Gion",
    location: { lat: 35.003764, lng: 135.77718 }
  },
  {
    title: "Nijo Castle",
    location: { lat: 35.014072, lng: 135.747578 }
  },
  {
    title: "Kifune Shrine",
    location: { lat: 35.121852, lng: 135.762899 }
  },
  {
    title: "Kyoto Imperial Palace",
    location: { lat: 35.025413, lng: 135.762126 }
  },
  {
    title: "Nishiki Market",
    location: { lat: 35.005007, lng: 135.764899 }
  },
  {
    title: "Tō-ji",
    location: { lat: 34.981118, lng: 135.747596 }
  },
  {
    title: "Kyoto Tower",
    location: { lat: 34.987573, lng: 135.759333 }
  },
  {
    title: "Philosopher's Walk (Tetsugaku-no-michi)",
    location: { lat: 35.021484, lng: 135.794207 }
  },
  {
    title: "Maruyama Park",
    location: { lat: 35.003882, lng: 135.780917 }
  },
  {
    title: "Kyoto International Manga Museum",
    location: { lat: 35.01194, lng: 135.759274 }
  }
];

class App extends Component {
  componentDidMount() {
    this.renderMap();
  }

  renderMap() {
    const apiKey = "AIzaSyAlIenynkE5AszSbeQJF_9qS2X_xGIi2zQ";
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
    );
    window.initMap = this.initMap;
  }

  initMap() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 35.02107, lng: 135.75385 },
      zoom: 10
    });
    var kyoto = { lat: 35.02107, lng: 135.75385 };
    var marker = new window.google.maps.Marker({
      position: kyoto,
      map: map,
      title: "Tokyo Marker!"
    });
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Content />
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

// TODO:
/*
  FRIDAY
  1. Branch off into React branch...OK
  2. Refactor code to use React components (maybe seperate files)...WORKING
  3. Implement Google Maps map into React component (see article link)

  MONDAY
  4. Application Functionality (Maps API)
  5. Additional Functionality (3rd Party API)

  TUESDAY
  6. Accessibility & Offline Usage & Documentation & Submit

*/
