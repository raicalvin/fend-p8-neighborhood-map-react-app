import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div id="input-field" className="flex-container flex-container-center">
        <input
          type="text"
          name="fname"
          placeholder="Filter results..."
          className="input-field-filter"
        />
      </div>
    );
  }
}

export default Input;
