import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
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
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused,
    }));
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={
            this.props.filters.searchBy === "company"
              ? this.props.filters.company
              : this.props.filters.role
          }
          onChange={(e) => {
            if (this.props.filters.searchBy === "company") {
              props.dispatch(setCompanyName(e.target.value));
            } else if (props.filters.searchBy === "role") {
              this.props.dispatch(setRoleName(e.target.value));
            }
          }}
        ></input>
        Sort By
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "salary") {
              this.props.dispatch(sortBySalary());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="salary">Salary</option>
        </select>
        Search By
        <select
          value={this.props.filters.searchBy}
          onChange={(e) => {
            if (e.target.value === "company") {
              this.props.dispatch(searchByCompany());
            } else if (e.target.value === "role") {
              this.props.dispatch(searchByRole());
            }
          }}
        >
          <option value="company">Company</option>
          <option value="role">Role</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
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
