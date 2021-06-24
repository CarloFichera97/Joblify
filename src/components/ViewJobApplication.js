import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import numeral from "numeral";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import Modal from "react-modal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { startRemoveJobApplication } from "./../actions/jobApplications";

export class ViewJobApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

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
        <Tabs>
          <TabList>
            <Tab>Job Application</Tab>
            <Tab>Recruiter</Tab>
            <Tab>Notes</Tab>
          </TabList>
          <TabPanel>
            <Card>
              <DataTable
                className="table_table"
                title={
                  <div className="table_title">Job Application</div>
                }
                columns={[
                  {
                    selector: "title",
                  },
                  {
                    selector: "value",
                  },
                ]}
                data={[
                  {
                    id: 1,
                    title: <div className="table_titles"> Company Name </div>,
                    value: (
                      <div className="table_values">
                        {this.props.jobApplication.company}
                      </div>
                    ),
                  },
                  {
                    id: 2,
                    title: <div className="table_titles"> Role </div>,
                    value: (
                      <div className="table_values">
                        {this.props.jobApplication.role}
                      </div>
                    ),
                  },
                  {
                    id: 3,
                    title: <div className="table_titles"> Salary </div>,
                    value: (
                      <div className="table_values">
                        {numeral(this.props.jobApplication.salary / 100).format(
                          "$00,00.00"
                        )}
                      </div>
                    ),
                  },

                  {
                    id: 4,
                    title: <div className="table_titles"> Status </div>,
                    value: (
                      <div className="table_values">
                        {" "}
                        {!this.props.jobApplication.status
                          ? "Undefined"
                          : `${this.props.jobApplication.status}`}
                      </div>
                    ),
                  },

                  {
                    id: 6,
                    title: <div className="table_titles"> Created On </div>,
                    value: (
                      <div className="table_values">
                        {moment(this.props.jobApplication.createdOn).format(
                          "MMMM Do, YYYY"
                        )}
                      </div>
                    ),
                  },
                ]}
              />
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <DataTable
                className="table_table"
                title={<div className="table_title">Recruiter</div>}
                columns={[
                  {
                    title: "title",
                    selector: "title",
                  },
                  {
                    selector: "value",
                  },
                ]}
                data={[
                  {
                    id: 1,
                    title: <div className="table_titles"> Full Name </div>,
                    value: (
                      <div className="table_values">
                        {!this.props.jobApplication.recruiterFullName
                          ? "Undefined"
                          : `${this.props.jobApplication.recruiterFullName}`}
                      </div>
                    ),
                  },
                  {
                    id: 2,
                    title: <div className="table_titles"> Email </div>,
                    value: (
                      <div className="table_values">
                        {!this.props.jobApplication.recruiterEmail
                          ? "Undefined"
                          : `${this.props.jobApplication.recruiterEmail}`}
                      </div>
                    ),
                  },
                  {
                    id: 3,
                    title: <div className="table_titles"> Salary </div>,
                    value: (
                      <div className="table_values">
                        {!this.props.jobApplication.recruiterPhoneNumber
                          ? "Undefined"
                          : `${this.props.jobApplication.recruiterPhoneNumber}`}
                      </div>
                    ),
                  },
                ]}
              />
            </Card>
          </TabPanel>
          <TabPanel>
            <Card className="card_notes">
              <div className="table_values">
                <div className="table_title_card_note">Notes</div>
                {!this.props.jobApplication.notes
                  ? "No Notes Selected"
                  : `${this.props.jobApplication.notes}`}
              </div>
            </Card>
          </TabPanel>
        </Tabs>
        <button className="button__view" onClick={this.handleOpenModal}>
          {" "}
          Remove Job Application{" "}
        </button>
        <button className="button__view" onClick={this.onClickEdit}>
          {" "}
          Edit Job Application{" "}
        </button>

        <Modal
          isOpen={this.state.showModal}
          className="modal"
          ariaHideApp={false}
        >
          <div className="modal_text">
            Do you want to remove this Job Application?
          </div>
          <button className="button__view_modal" onClick={this.onClickRemove}>
            {" "}
            Yes
          </button>
          <button
            className="button__view_modal"
            onClick={this.handleCloseModal}
          >
            {" "}
            No
          </button>
        </Modal>
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
