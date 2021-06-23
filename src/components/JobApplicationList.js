import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import getFilteredJobApplications from "./../selectors/jobApplications";
import numeral from "numeral";
import "numeral/locales/en-gb";

export const JobApplicationList = (props) => {
  return (
    <div className="content-container__dashboard">
      <p className="numeral_locale">{numeral.locale("en-gb")}</p>

      <h2 className="total__filter__selected">
        There are a total of {props.jobApplications.length} Job Applications
        listed for the filters selected
      </h2>

      <div className="list-body">
        <div className="list-header">
          <div className="upper_message_company">Company & Role</div>
          <div className="upper_message_salary">Salary</div>
        </div>
        {props.jobApplications.map((jobApplication) => (
          <div key={jobApplication.id}>
            <Link className="list-item" to={`/view/${jobApplication.id}`}>
              <div>
                <p className="list-item__title">{jobApplication.company}</p>
                <span className="list-item__sub-title">
                  {" "}
                  {jobApplication.role}{" "}
                </span>
              </div>
              <span className="list-item__data">
                {numeral(jobApplication.salary / 100).format("$00,00.00")}{" "}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobApplications: getFilteredJobApplications(
      state.jobApplications,
      state.filters
    ),
  };
};

export default connect(mapStateToProps)(JobApplicationList);
