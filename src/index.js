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
  addJobApplication,
  editJobApplication,
  removeJobApplication,
} from "./actions/jobApplications";

const store = configureStore();

/* ------------------BASIC FUNCTIONALITY TESTS---------------------------------
console.log(store.getState());

*/ console.log("-----------------ADDING JOB APPLICATION--------------");
store.dispatch(
  addJobApplication({
    company: "Company ONE",
    role: "Electrical Engineer",
    salary: 5000000,
    createdOn: 1000000000000,
  })
);
console.log(store.getState());

console.log("-----------------ADDING JOB APPLICATION--------------");
store.dispatch(
  addJobApplication({
    company: "Company TWO",
    role: "Software Engineer",
    salary: 7000000,
    description: "Description",
    notes: "XXXXXXXXXXXXXXXXXX",
    status: "XXXXXXXXXXXXXXXXXXXX",
    createdOn: -500,
  })
);

console.log("-----------------ADDING JOB APPLICATION--------------");
store.dispatch(
  addJobApplication({
    company: "Company THREE",
    role: "Industrial Engineer",
    salary: 9000000,
    description: "Description",
    notes: "XXXXXXXXXXXXXXXXXX",
    status: "XXXXXXXXXXXXXXXXXXXX",
    createdOn: -500,
  })
);
console.log(store.getState());

/*
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

console.log(store.getState().filters.sortBy); */
store.dispatch(sortByDate());

console.log("-----------------SEARCH BY COMPANY--------------");
store.dispatch(searchByCompany());
console.log(store.getState().filters.searchBy);

console.log("-----------------SEARCH BY ROLE--------------");
//store.dispatch(searchByRole());
console.log(store.getState().filters.searchBy);
console.log(store.getState());

const jsx = (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
