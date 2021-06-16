import React from "react";
import { connect } from "react-redux";
import { startEditJobApplication } from "./../actions/jobApplications";
import JobForm from "./JobForm";
export class EditJobApplication extends React.Component {
  onSubmit = (jobApplication) => {
    this.props.onSubmit(jobApplication);
    this.props.history.push("/dashboard");
  };
  onClick = () => {
    this.props.onClick();
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <JobForm
          jobApplication={this.props.jobApplication}
          onSubmit={this.onSubmit}
        />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditJobApplication);
