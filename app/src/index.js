import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import registerServiceWorker from './registerServiceWorker';
import beginServiceWorker from "./beginServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();
beginServiceWorker();
