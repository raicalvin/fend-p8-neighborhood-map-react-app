import React, { Component } from "react";
import "./App.css";

class App extends Component {
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
          <div id="map" />
        </div>
        <div id="footer" className="flex-container flex-container-center">
          <span>Made with LOVE. And React. By Calvin.</span>
        </div>
      </div>
    );
  }
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

/* ========== Footer Component ========== */
/* ========== Content Component ========== */

// TODO:
/*
  FRIDAY
  1. Branch off into React branch
  2. Refactor code to use React components (maybe seperate files)
  3. Implement Google Maps map into React component (see article link)

  MONDAY
  4. Application Functionality (Maps API)
  5. Additional Functionality (3rd Party API)

  TUESDAY
  6. Accessibility & Offline Usage & Documentation & Submit

*/
