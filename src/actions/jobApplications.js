import { v4 as uuidv4 } from "uuid";

export const addJobApplication = ({
  company = "",
  role = "",
  salary = undefined,
  description = "",
  notes = "",
  createdOn = undefined,
  status = "",
  recruiterFullName = "",
  recruiterEmail = "",
  recruiterPhoneNumber = "",
} = {}) => ({
  type: "ADD_JOB_APPLICATION",
  jobApplication: {
    id: uuidv4(),
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
  },
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
