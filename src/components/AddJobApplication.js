import React from "react";
import { connect } from "react-redux";
import { addJobApplication } from "./../actions/jobApplications";
import JobForm from "./JobForm";

export class AddJobApplication extends React.Component {
  onSubmit = (jobApplication) => {
    this.props.onSubmit(jobApplication);
    this.props.history.push("/");
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
  onSubmit: (jobApplication) => dispatch(addJobApplication(jobApplication)),
});

export default connect(undefined, mapDispatchToProps)(AddJobApplication);
