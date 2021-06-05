require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import AppRouter from "./routes/AppRoutes";
import configureStore from "./store/configureStore";
import {
  setStartDate,
  setEndDate,
  setCompanyName,
  setRole,
  sortBySalary,
  sortByDate,
} from "./actions/filters";

import {
  addJobApplication,
  editJobApplication,
  removeJobApplication,
} from "./actions/jobApplications";

const store = configureStore();

/* ------------------BASIC FUNCTIONALITY TESTS---------------------------------
console.log(store.getState());

console.log("-----------------ADDING JOB APPLICATION--------------");
store.dispatch(
  addJobApplication({
    company: "WWWWWWWWWWWWWWWWWWW",
    role: "WWWWWWWWWWWWWWWWWWWWWWWWWWW",
    salary: 2222222222222222222222,
  })
);
console.log(store.getState());

console.log("-----------------ADDING JOB APPLICATION--------------");
store.dispatch(
  addJobApplication({
    company: "FFFFFFFFFFFFFFFF",
    role: "FFFFFFFFFFFFFF",
    salary: 1111111111111,
    description: "XXXXXXXXXXXXXXXXXXX",
    notes: "XXXXXXXXXXXXXXXXXX",
    status: "XXXXXXXXXXXXXXXXXXXX",
    createdOn: new Date().toDateString(),
  })
);
console.log(store.getState());
console.log("-----------------EDITING FIRST JOB APPLICATION--------------");
console.log(store.getState().jobApplications[0]);
const idNeeded2 = String(store.getState().jobApplications[0].id);
console.log(idNeeded2);
const updates = { company: "XXXXXXXXXXXXXXXX", salary: 9999999999999 };
store.dispatch(editJobApplication(idNeeded2, updates));
console.log(store.getState());

console.log("-----------------REMOVING SECOND JOB APPLICATION--------------");
const idNeeded = String(store.getState().jobApplications[1].id);
console.log(idNeeded);
store.dispatch(removeJobApplication(idNeeded));
console.log(store.getState());
console.log("-----------------SETTING START DATE--------------");
store.dispatch(setStartDate(99999999999999999));
console.log(store.getState().filters.startDate);
console.log("-----------------SETTING END DATE--------------");
store.dispatch(setEndDate(9999999999999999));
console.log(store.getState().filters.endDate);
console.log("-----------------SETTING COMPANY NAME--------------");
store.dispatch(setCompanyName("XXXXXXXXXXXXXXX"));
console.log(store.getState().filters.companyName);
console.log("-----------------SETTING ROLE--------------");
store.dispatch(setRole("YYYYYYYYYYYYYYYYYYY"));
console.log(store.getState().filters.role);
console.log("-----------------SORT BY SALARY--------------");
store.dispatch(sortBySalary());
console.log(store.getState().filters.sortBy);
console.log("-----------------SORT BY DATE--------------");
store.dispatch(sortByDate());
console.log(store.getState().filters.sortBy); */

ReactDOM.render(<AppRouter />, document.getElementById("app"));
