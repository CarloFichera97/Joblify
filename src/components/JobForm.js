import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";

export default class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.jobApplication ? props.jobApplication.company : "",
      role: props.jobApplication ? props.jobApplication.role : "",
      salary: props.jobApplication ? props.jobApplication.salary / 100 : "",
      status: props.jobApplication ? props.jobApplication.status : "",
      description: props.jobApplication ? props.jobApplication.description : "",
      notes: props.jobApplication ? props.jobApplication.notes : "",
      createdOn: props.jobApplication
        ? moment(props.jobApplication.createdOn)
        : moment(),
      recruiterFullName: props.jobApplication
        ? props.jobApplication.recruiterFullName
        : "",
      recruiterEmail: props.jobApplication
        ? props.jobApplication.recruiterEmail
        : "",
      recruiterPhoneNumber: props.jobApplication
        ? props.jobApplication.recruiterPhoneNumber
        : "",
      calendarFocused: false,
      error: "",
    };
  }

  onCompanyChange = (e) => {
    const company = e.target.value;
    this.setState(() => ({ company }));
  };

  onRoleChange = (e) => {
    const role = e.target.value;
    this.setState(() => ({ role }));
  };
  onSalaryChange = (e) => {
    const salary = e.target.value;
    if (!salary || salary.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ salary }));
    }
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onStatusChange = (e) => {
    const status = e.target.value;
    this.setState(() => ({ status }));
  };

  onNotesChange = (e) => {
    const notes = e.target.value;
    this.setState(() => ({ notes }));
  };

  onNameChange = (e) => {
    const recruiterFullName = e.target.value;
    this.setState(() => ({ recruiterFullName }));
  };

  onEmailChange = (e) => {
    const recruiterEmail = e.target.value;
    this.setState(() => ({ recruiterEmail }));
  };

  onNumberChange = (e) => {
    const recruiterPhoneNumber = e.target.value;
    if (!recruiterPhoneNumber || recruiterPhoneNumber.match(/^\d{1,}?$/)) {
      this.setState(() => ({ recruiterPhoneNumber }));
    }
  };

  onDateChange = (createdOn) => {
    if (createdOn) {
      this.setState(() => ({
        createdOn,
      }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({
      calendarFocused: focused,
    }));
  };

  closeError = () => {
    this.setState(() => ({ error: "" }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (
      !this.state.company ||
      !this.state.role ||
      !this.state.description ||
      !this.state.salary
    ) {
      this.setState(() => ({
        error:
          "Please provide at least Company Name, Role, Description and indicative salary",
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        company: this.state.company,
        role: this.state.role,
        salary: parseFloat(this.state.salary, 10) * 100,
        description: this.state.description,
        status: this.state.status,
        createdOn: this.state.createdOn.valueOf(),
        notes: this.state.notes,
        recruiterFullName: this.state.recruiterFullName,
        recruiterEmail: this.state.recruiterEmail,
        recruiterPhoneNumber: this.state.recruiterPhoneNumber,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <div onClick={this.closeError} className="error-header">
            <div className="content-container">
              <h1 className="page-header__title">
                {this.state.error && this.state.error}
              </h1>
            </div>
          </div>
        )}

        <form onSubmit={this.onSubmit}>
          <h1 className="title title-companydetails">Job Details</h1>

          <input
            className="input--jobform"
            type="text"
            placeholder="Company Name *"
            autoFocus
            value={this.state.company}
            onChange={this.onCompanyChange}
          />
          <input
            className="input--jobform"
            type="text"
            placeholder="Role  *"
            value={this.state.role}
            onChange={this.onRoleChange}
          />

          <SingleDatePicker
            date={this.state.createdOn}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
            block
          />
          <input
            className="input--jobform"
            type="text"
            placeholder="Salary  *"
            value={this.state.salary}
            onChange={this.onSalaryChange}
          />
          <input
            className="input--jobform"
            type="text"
            placeholder="Description  *"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            className="input--jobform"
            type="text"
            placeholder="Status"
            value={this.state.status}
            onChange={this.onStatusChange}
          />
          <textarea
            className="textarea"
            rows="5"
            placeholder="Add a note for your job application"
            value={this.state.notes}
            onChange={this.onNotesChange}
          ></textarea>

          <h1 className="title title-recruiterdetails">Recruiter Details</h1>
          <input
            className="input--jobform"
            type="text"
            placeholder="Recruiter Name"
            value={this.state.recruiterFullName}
            onChange={this.onNameChange}
          />

          <input
            className="input--jobform"
            type="email"
            placeholder="Recruiter Email"
            value={this.state.recruiterEmail}
            onChange={this.onEmailChange}
          />

          <input
            className="input--jobform"
            type="text"
            placeholder="Recruiter Number"
            value={this.state.recruiterPhoneNumber}
            onChange={this.onNumberChange}
          />
          <div>
            <button className="button__jobForm" onClick>
              Add Job Application
            </button>
          </div>
        </form>
      </div>
    );
  }
}
