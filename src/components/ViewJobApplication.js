import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import numeral from "numeral";

import { removeJobApplication } from "./../actions/jobApplications";

export class ViewJobApplication extends React.Component {
  onClickRemove = () => {
    this.props.dispatch(removeJobApplication(this.props.jobApplication.id));
    this.props.history.push("/");
  };

  onClickEdit = () => {
    this.props.history.push(`/edit/${this.props.jobApplication.id}`);
  };

  render() {
    return (
      <div>
        <h2>Company Name: {this.props.jobApplication.company}</h2>
        <h3>Role: {this.props.jobApplication.role} </h3>
        <p>
          Salary:{" "}
          {numeral(this.props.jobApplication.salary / 100).format("$00,00.00")}{" "}
        </p>
        <p>
          Created:{" "}
          {moment(this.props.jobApplication.createdOn).format("MMMM Do, YYYY")}
        </p>
        {!this.props.jobApplication.description ? (
          <p>Description: None</p>
        ) : (
          <p>{this.props.jobApplication.description}</p>
        )}
        {!this.props.jobApplication.notes ? (
          <p>Notes: None</p>
        ) : (
          <p>{this.props.jobApplication.notes}</p>
        )}
        {!this.props.jobApplication.status ? (
          <p>Status: Undefined</p>
        ) : (
          <p>{this.props.jobApplication.status}</p>
        )}

        <h3> Recruiter Details</h3>
        {!this.props.jobApplication.recruiterFullName ? (
          <p>Full Name: Undefined</p>
        ) : (
          <p>{this.props.jobApplication.recruiterFullName}</p>
        )}

        {!this.props.jobApplication.recruiterEmail ? (
          <p>Email: Undefined</p>
        ) : (
          <p>{this.props.jobApplication.recruiterEmail}</p>
        )}

        {!this.props.jobApplication.recruiterPhoneNumber ? (
          <p>Number: Undefined</p>
        ) : (
          <p>{this.props.jobApplication.recruiterPhoneNumber}</p>
        )}

        <button onClick={this.onClickRemove}> Remove Job Application </button>
        <button onClick={this.onClickEdit}> Edit Job Application </button>
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

export default connect(mapStateToProps)(ViewJobApplication);
