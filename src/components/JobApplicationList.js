import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeJobApplication } from "./../actions/jobApplications";
import getFilteredJobApplications from "./../selectors/jobApplications";

const JobApplicationList = (props) => {
  return (
    <div>
      {props.jobApplications.map((jobApplication) => (
        <div key={jobApplication.id}>
          <Link to={`/edit/${jobApplication.id}`}>
            <h3>
              Company: {jobApplication.company} Role: {jobApplication.role}
            </h3>
          </Link>
          <p>Salary: {jobApplication.salary}$ </p>
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
