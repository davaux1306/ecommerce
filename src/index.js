// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Import other react components
import App from "./App";

// Create a react component

// Take the react component and show it on the screen
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
