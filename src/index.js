import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import { BrowserRouter, Route } from "react-router-dom";

// import App from './App';
// import Navbar from './components/Navbar';
// import { ContextProvider } from './Context';

// ReactDOM.render(
//   <ContextProvider>
//     <Navbar />
//     <App />
//   </ContextProvider>,
//   document.getElementById('root'),
// );

import { Provider } from "react-redux";
import App from "./app/App";
import store from "./redux/store";
import { autoLogin } from "./redux/ducks/sessionDuck"

if (localStorage.token) {
  store.dispatch(autoLogin(localStorage.token));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
