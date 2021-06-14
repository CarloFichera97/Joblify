import React from "react";
import { connect } from "react-redux";
import { startAddJobApplication } from "./../actions/jobApplications";
import JobForm from "./JobForm";

export class AddJobApplication extends React.Component {
  onSubmit = (jobApplication) => {
    this.props.startAddJobApplication(jobApplication);
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div>
        <JobForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

//To simplify testing with spies
const mapDispatchToProps = (dispatch) => ({
  startAddJobApplication: (jobApplication) =>
    dispatch(startAddJobApplication(jobApplication)),
});

export default connect(undefined, mapDispatchToProps)(AddJobApplication);
