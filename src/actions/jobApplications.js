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

export const editJobApplication = (id, updates) => ({
  type: "EDIT_JOB_APPLICATION",
  id,
  updates,
});

export const removeJobApplication = (id) => ({
  type: "REMOVE_JOB_APPLICATION",
  id,
});

export const setJobApplications = (jobApplications) => ({
  type: "SET_JOB_APPLICATIONS",
  jobApplications,
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
    return database
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

//1. Fetch all data
//2. Parse the data into an array
//3. Dispatch SET_JOB_APPLICATION
export const startSetJobApplication = () => {
  return (dispatch) => {
    //Double return is used in order to return the promise
    //inside the outer return, this is fundamental!
    return database
      .ref("Job_Applications")
      .once("value")
      .then((snapshot) => {
        const jobApplications = [];
        snapshot.forEach((childSnapshot) => {
          jobApplications.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setJobApplications(jobApplications));
      });
  };
};

export const startRemoveJobApplication = (id) => {
  return (dispatch) => {
    return database
      .ref(`Job_Applications/${id}`)
      .remove()
      .then(() => {
        dispatch(removeJobApplication(id));
      });
  };
};

export const startEditJobApplication = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`Job_Applications/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editJobApplication(id, updates));
      });
  };
};
