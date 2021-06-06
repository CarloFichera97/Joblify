import React from "react";
import { connect } from "react-redux";
import {
  sortByDate,
  sortBySalary,
  setCompanyName,
  setRoleName,
  searchByCompany,
  searchByRole,
} from "./../actions/filters";

const FilterSelector = (props) => {
  return (
    <div>
      <input
        type="text"
        value={
          props.filters.searchBy === "company"
            ? props.filters.company
            : props.filters.role
        }
        onChange={(e) => {
          if (props.filters.searchBy === "company") {
            props.dispatch(setCompanyName(e.target.value));
          } else if (props.filters.searchBy === "role") {
            props.dispatch(setRoleName(e.target.value));
          }
        }}
      ></input>
      Sort By
      <select
        value={props.filters.sortBy}
        onChange={(e) => {
          if (e.target.value === "date") {
            props.dispatch(sortByDate());
          } else if (e.target.value === "salary") {
            props.dispatch(sortBySalary());
          }
        }}
      >
        <option value="date">Date</option>
        <option value="salary">Salary</option>
      </select>
      Search By
      <select
        value={props.filters.searchBy}
        onChange={(e) => {
          if (e.target.value === "company") {
            props.dispatch(searchByCompany());
          } else if (e.target.value === "role") {
            props.dispatch(searchByRole());
          }
        }}
      >
        <option value="company">Company</option>
        <option value="role">Role</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(FilterSelector);
