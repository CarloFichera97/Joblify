import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import getFilteredJobApplications from "./../selectors/jobApplications";
import numeral from "numeral";
import "numeral/locales/en-gb";

export const JobApplicationList = (props) => {
  return (
    <div>
      {numeral.locale("en-gb")}
      <h2>
        There are a total of {props.jobApplications.length} Job Applications
        listed for the filters selected
      </h2>
      {props.jobApplications.map((jobApplication) => (
        <div key={jobApplication.id}>
          <Link to={`/view/${jobApplication.id}`}>
            <h3>Company: {jobApplication.company}</h3>
          </Link>
          <p> Role: {jobApplication.role} </p>
          <p>
            Salary: {numeral(jobApplication.salary / 100).format("$00,00.00")}{" "}
          </p>
          <p>{moment(jobApplication.createdOn).format("MMMM Do, YYYY")}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobApplications: getFilteredJobApplications(
      state.jobApplications,
      state.filters
    ),
  };
};

export default connect(mapStateToProps)(JobApplicationList);
