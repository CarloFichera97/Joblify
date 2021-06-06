import React from "react";
import { connect } from "react-redux";
import { addJobApplication } from "./../actions/jobApplications";
import JobForm from "./JobForm";

const AddJobApplication = (props) => (
  <div>
    <JobForm
      onSubmit={(jobApplication) => {
        props.dispatch(addJobApplication(jobApplication));
        props.history.push("/");
        console.log(jobApplication);
      }}
    />
  </div>
);
export default connect()(AddJobApplication);
