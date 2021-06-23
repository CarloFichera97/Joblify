import {
  addJobApplication,
  editJobApplication,
  removeJobApplication,
  startAddJobApplication,
} from "./../../actions/jobApplications";
import database from "./../../firebase/firebase";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const createMockStore = configureMockStore([thunk]);

import { testDataArray, testData, testDataNoID } from "./../fixtures/testData";

test("Sho@uld add a Job Application with non default values", () => {
  expect(addJobApplication(testData)).toEqual({
    type: "ADD_JOB_APPLICATION",
    jobApplication: {
      ...testData,
    },
  });
});

test("Should remove a job application", () => {
  expect(removeJobApplication(testDataArray[1].id)).toEqual({
    type: "REMOVE_JOB_APPLICATION",
    id: testDataArray[1].id,
  });
});

test("Should edit a job application", () => {
  expect(editJobApplication(testDataArray[1].id, { ...testData })).toEqual({
    type: "EDIT_JOB_APPLICATION",
    id: testDataArray[1].id,
    updates: { ...testData },
  });
});
