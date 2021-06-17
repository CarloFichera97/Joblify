import React from "react";
import { connect } from "react-redux";
import { startAddJobApplication } from "./../actions/jobApplications";
import JobForm from "./JobForm";

export class AddJobApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  onSubmit = (jobApplication) => {
    this.props.startAddJobApplication(jobApplication);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <div>
        <div className="content-container">
          <JobForm onSubmit={this.onSubmit} />
        </div>
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
