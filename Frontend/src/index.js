/* global document */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import store from "./config/store";

// By using <Provider />, the store will be made available for all the components in your application.

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById("root")
);