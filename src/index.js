require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import AppRouter, { history } from "./routes/AppRoutes";
import configureStore from "./store/configureStore";
import "react-dates/initialize";
import "./firebase/firebase";
import { firebase } from "./firebase/firebase";

import {
  setStartDate,
  setEndDate,
  setCompanyName,
  setRole,
  sortBySalary,
  sortByDate,
  searchByCompany,
  searchByRole,
} from "./actions/filters";

import {
  startSetJobApplication,
  editJobApplication,
  removeJobApplication,
} from "./actions/jobApplications";

import { login, logout } from "./actions/auth";

const store = configureStore();

const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetJobApplication()).then(() => {
      renderApp();
    });
    //If current location is login - This is for when refreshing page
    //otherwise the user is moved to dashboard
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

ReactDOM.render(<p>Loading....</p>, document.getElementById("app"));
