import React from "react";
import { connect } from "react-redux";
import { removeJobApplication } from "./../actions/jobApplications";
import getFilteredJobApplications from "./../selectors/jobApplications";

const JobApplicationList = (props) => {
  return (
    <div>
      {props.jobApplications.map((jobApplication) => (
        <div key={jobApplication.id}>
          <h3>
            Company: {jobApplication.company} Role: {jobApplication.role}
          </h3>
          <p>Salary: {jobApplication.salary}$ </p>
          <button
            onClick={() => {
              props.dispatch(removeJobApplication(jobApplication.id));
            }}
          >
            Remove
          </button>
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
