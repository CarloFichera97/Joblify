require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import AppRouter from "./routes/AppRoutes";
import configureStore from "./store/configureStore";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

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

const store = configureStore();

const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);
//Loading a message until we get the appropriate data from firebase
ReactDOM.render(<p>Loading....</p>, document.getElementById("app"));

store.dispatch(startSetJobApplication()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});
