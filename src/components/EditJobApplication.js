import React from "react";
import { connect } from "react-redux";
import {
  editJobApplication,
  removeJobApplication,
} from "./../actions/jobApplications";
import JobForm from "./JobForm";
const EditJobApplication = (props) => {
  return (
    <div>
      <JobForm
        jobApplication={props.jobApplication}
        onSubmit={(jobApplication) => {
          props.dispatch(
            editJobApplication(props.match.params.id, jobApplication)
          );
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeJobApplication(props.match.params.id));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    jobApplication: state.jobApplications.find((jobApplication) => {
      return jobApplication.id === props.match.params.id;
    }),
  };
};
export default connect(mapStateToProps)(EditJobApplication);
