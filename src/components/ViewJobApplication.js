import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import numeral from "numeral";

import { startRemoveJobApplication } from "./../actions/jobApplications";

export class ViewJobApplication extends React.Component {
  onClickRemove = () => {
    this.props.dispatch(
      startRemoveJobApplication(this.props.jobApplication.id)
    );
    this.props.history.push("/dashboard");
  };

  onClickEdit = () => {
    this.props.history.push(`/edit/${this.props.jobApplication.id}`);
  };

  render() {
    return (
      <div className="content-container__view">
        <div className="list-header">
          <div className="upper_message_company_view">
            {this.props.jobApplication.company}
          </div>
          <div className="upper_message_date_view">
            {moment(this.props.jobApplication.createdOn).format(
              "MMMM Do, YYYY"
            )}
          </div>
        </div>

        <div className="content-container__view_jobDetails">
          <div>
            <p className="list-item__title">
              Role: {this.props.jobApplication.role}
            </p>
            <p className="list-item__title">
              {" "}
              {!this.props.jobApplication.status ? (
                <p>Status: Undefined</p>
              ) : (
                <p>Status: {this.props.jobApplication.status}</p>
              )}
            </p>
            <p className="list-item__sub-title">
              Salary:{" "}
              {numeral(this.props.jobApplication.salary / 100).format(
                "$00,00.00"
              )}
            </p>
          </div>
          <span className="list-item__data">
            {!this.props.jobApplication.notes ? (
              <p>Notes: None</p>
            ) : (
              <p>{this.props.jobApplication.notes}</p>
            )}
          </span>
        </div>

        <div className="content-container__view">
          <div className="list-header">
            <div className="upper_message_company_view">Recruiter Info</div>
          </div>

          <div className="content-container__view_jobDetails">
            <div>
              <p className="list-item__title">
                {!this.props.jobApplication.recruiterFullName ? (
                  <p>Full Name: Undefined</p>
                ) : (
                  <p>{this.props.jobApplication.recruiterFullName}</p>
                )}
              </p>
              <p className="list-item__title">
                {!this.props.jobApplication.recruiterEmail ? (
                  <p>Email: Undefined</p>
                ) : (
                  <p>{this.props.jobApplication.recruiterEmail}</p>
                )}
              </p>
              <p className="list-item__sub-title">
                {!this.props.jobApplication.recruiterPhoneNumber ? (
                  <p>Number: Undefined</p>
                ) : (
                  <p>{this.props.jobApplication.recruiterPhoneNumber}</p>
                )}
              </p>
            </div>
          </div>
        </div>

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
