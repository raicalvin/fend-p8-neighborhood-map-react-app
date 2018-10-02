import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.renderMap();
  }

  initMap() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  renderMap() {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlIenynkE5AszSbeQJF_9qS2X_xGIi2zQ&callback=initMap"
    );
    window.initMap = this.initMap;
  }

  render() {
    return (
      <div id="app">
        <Header />
        <div id="content" className="flex-container">
          <div id="sidebar">
            <div
              id="input-field"
              className="flex-container flex-container-center"
            >
              <input
                type="text"
                name="fname"
                placeholder="Filter results..."
                className="input-field-filter"
              />
            </div>
            <div id="sidebar-list">
              <ul>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">Kyoto Palace</span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">Fushimi Inari-taisha</span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">Arashiyama</span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">Gion</span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">Nijo Castle</span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">Kifune Shrine</span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">
                      Kyoto Imperial Palace
                    </span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">Nishiki Market</span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">Tō-ji</span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">Kyoto Tower</span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">Philosopher's Walk</span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">Maruyama Park</span>
                  </div>
                </li>
                <li>
                  <div className="list-item flex-container-list-item">
                    <span className="list-item-span">
                      Kyoto International Manga Museum
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-map">
            <div id="map" />
          </div>
        </div>
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

/* ========== Header Component ========== */
class Header extends Component {
  render() {
    return (
      <div id="header" className="flex-container flex-container-center">
        <span>KYOTO EXPLORE</span>
      </div>
    );
  }
}

/* ========== Content Component ========== */

/* ========== Footer Component ========== */
class Footer extends Component {
  render() {
    return (
      <div id="footer" className="flex-container flex-container-center">
        <span>Made with LOVE. And React. By Calvin.</span>
      </div>
    );
  }
}

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
