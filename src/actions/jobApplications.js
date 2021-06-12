import { v4 as uuidv4 } from "uuid";
import database from "./../firebase/firebase";

//Basic Logic before firebase Integration
//Component calls action generator
//Action generator returns object
//Component dispatches object
//Redux store changes

//Basic logic after firebase Integration
//Component calls action generator
//Action Generator returns function()
//Function runs

export const addJobApplication = (jobApplication) => ({
  type: "ADD_JOB_APPLICATION",
  jobApplication,
});

//Responsible for writing to the database the new job application
//Responsible for calling addJobApplication and updating the store
export const startAddJobApplication = (jobApplicationData) => {
  return (dispatch) => {
    const {
      company = "",
      role = "",
      salary = 0,
      description = "",
      notes = "",
      createdOn = 0,
      status = "",
      recruiterFullName = "",
      recruiterEmail = "",
      recruiterPhoneNumber = "",
    } = jobApplicationData;
    const jobApplication = {
      company,
      role,
      salary,
      description,
      notes,
      createdOn,
      status,
      recruiterFullName,
      recruiterEmail,
      recruiterPhoneNumber,
    };
    //Once the data is changed change the store
    //When consuming the promise-->Access to ref --> Access to the
    //Unique ID that was previously generated with uuidv4
    database
      .ref("Job_Applications")
      .push(jobApplication)
      .then((ref) => {
        dispatch(
          addJobApplication({
            id: ref.key,
            ...jobApplication,
          })
        );
      });
  };
};

export const editJobApplication = (id, updates) => ({
  type: "EDIT_JOB_APPLICATION",
  id,
  updates,
});

export const removeJobApplication = (id) => ({
  type: "REMOVE_JOB_APPLICATION",
  id,
});

const demo = {
  jobApplications: [
    {
      company: "xxxx",
      role: "Software Developer",
      salary: "xxxxx",
      createdOn: "xxxx",
      description: "xxxx",
      notes: "xxxxx",
      id: "unique ID",
      status: "xxxxx",
      rectruiter: {
        fullName: "XXXXX",
        email: "XXXX",
        number: "XXX",
      },
    },
  ],
  filters: {
    startDate: "xxxx",
    endDate: "xxxx",
    companyName: "xxxx",
    role: "xxxxxx",
    sortBy: "xxxxxx", //sorted by salary or date
    searchBy: "xxxx", ///Role or Company
  },
};

///TO ADD TO THE DEMO
/*const recruiterContacts = {
  fullName,
  email,
  phoneNumber,
  lastSpokenOn,
};*/
