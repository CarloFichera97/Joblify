import React from "react";
import { connect } from "react-redux";
import {
  startEditJobApplication,
  startRemoveJobApplication,
} from "./../actions/jobApplications";
import JobForm from "./JobForm";
export class EditJobApplication extends React.Component {
  onSubmit = (jobApplication) => {
    this.props.onSubmit(jobApplication);
    this.props.history.push("/");
  };
  onClick = () => {
    this.props.onClick();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <JobForm
          jobApplication={this.props.jobApplication}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    jobApplication: state.jobApplications.find((jobApplication) => {
      return jobApplication.id === props.match.params.id;
    }),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: (jobApplication) =>
      dispatch(startEditJobApplication(props.match.params.id, jobApplication)),
    onClick: () => dispatch(startRemoveJobApplication(props.match.params.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditJobApplication);
