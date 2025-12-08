import React from "react";
import ReactDOM from "react-dom";

// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<h1>Marketing</h1>, el);
};

// If in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// If running through container, export the mount function
export { mount };
