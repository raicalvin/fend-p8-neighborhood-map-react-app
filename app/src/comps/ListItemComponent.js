import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li>
        <div className="list-item flex-container-list-item">
          <span className="list-item-span">Kyoto Palace</span>
        </div>
      </li>
    );
  }
}

export default ListItem;
