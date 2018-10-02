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
            <ListItem />
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
                <span className="list-item-span">Kyoto Imperial Palace</span>
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
    );
  }
}

export default Sidebar;
