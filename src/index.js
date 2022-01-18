import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import { BrowserRouter, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import App from "./app/App";
import store from "./redux/store";
import { autoLogin } from "./redux/ducks/sessionDuck"
if (localStorage.token) {
  store.dispatch(autoLogin(localStorage.token));
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
