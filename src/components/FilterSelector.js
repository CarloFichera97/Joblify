import React, { Component } from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 80,

    padding: "3px",

    margin: "2px",
    marginTop: "15px",

    marginBottom: "-10px",
    fontSize: "20px",
  }),

  dropdownIndicator: () => ({
    display: "none",
  }),

  singleValue: (provided, state) => {
    return { ...provided };
  },
};

const sortByOptions = [
  { value: "date", label: "Date" },
  { value: "salary", label: "Salary" },
];

const searchByOptions = [
  { value: "company", label: "Company" },
  { value: "role", label: "Role" },
];

import {
  sortByDate,
  sortBySalary,
  setCompanyName,
  setRoleName,
  searchByCompany,
  searchByRole,
  setEndDate,
  setStartDate,
} from "./../actions/filters";

class FilterSelector extends React.Component {
  state = {
    calendarFocused: null,
    selectedSortByOption: null,
    selectedSearchByOption: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  handleSelectChangeSortBy = (selectedSortByOption) => {
    this.setState({ selectedSortByOption }, () => {
      if (this.state.selectedSortByOption.label === "Date") {
        this.props.dispatch(sortByDate());
      } else if (this.state.selectedSortByOption.label === "Salary") {
        this.props.dispatch(sortBySalary());
      }
    });
  };

  handleSelectChangeSearchBy = (selectedSearchByOption) => {
    this.setState({ selectedSearchByOption }, () => {
      if (this.state.selectedSearchByOption.label === "Company") {
        this.props.dispatch(searchByCompany());
      } else if (this.state.selectedSearchByOption.label === "Role") {
        console.log("I am here");
        console.log(this.props.filters.searchBy);
        this.props.dispatch(searchByRole());
        setTimeout(() => console.log(this.props.filters.searchBy), 1000);
      }
    });
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused,
    }));
  };
  render() {
    return (
      <div className="content-container-filters">
        <div className="input-group">
          <div className="input-group__item">
            <p className="select_option"> Search By:</p>
            <div id="select_2" className="select_container">
              <Select
                isSearchable={false}
                styles={customStyles}
                options={searchByOptions}
                value={this.state.selectedSearchByOption}
                onChange={this.handleSelectChangeSearchBy}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    text: "#797a9e",
                    primary25: "#b7b8cb",
                    primary: "#797a9e",
                    neutral150: "pink",
                  },
                })}
              />
            </div>
          </div>
          <div className="input-group__item">
            <p className="select_option"> Sort By:</p>
            <div id="select_1" className="select_container">
              <Select
                isSearchable={false}
                styles={customStyles}
                options={sortByOptions}
                value={this.state.selectedSortByOption}
                onChange={this.handleSelectChangeSortBy}
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    text: "#797a9e",
                    primary25: "#b7b8cb",
                    primary: "#797a9e",
                  },
                })}
              />
            </div>
          </div>
          <div className="input-group__item">
            <input
              placeholder="Insert Filter"
              className="dashboard_input"
              type="text"
              value={
                this.props.filters.searchBy === "company"
                  ? this.props.filters.company
                  : this.props.filters.role
              }
              onChange={(e) => {
                if (this.props.filters.searchBy === "company") {
                  this.props.dispatch(setCompanyName(e.target.value));
                } else if (this.props.filters.searchBy === "role") {
                  this.props.dispatch(setRoleName(e.target.value));
                }
              }}
            ></input>
          </div>

          <div className="input-group__item">
            <div id="multidatepicker_container" className="select_container">
              <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
                noBorder={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(FilterSelector);
