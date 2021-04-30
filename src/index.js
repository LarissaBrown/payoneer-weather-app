import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextStoreProvider } from "./ContextStore";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <ContextStoreProvider>
    <App />
  </ContextStoreProvider>,
  rootElement
);
