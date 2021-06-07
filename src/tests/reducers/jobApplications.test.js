import {
  testDataArray,
  testData,
  defaultTestData,
} from "./../fixtures/testData";

import jobApplicationsReducer from "./../../reducers/jobApplications";

import moment from "moment";

test("Should Add a Job application to the test data with default values", () => {
  expect(
    jobApplicationsReducer(testDataArray, {
      type: "ADD_JOB_APPLICATION",
      jobApplication: testData,
    })
  ).toEqual([...testDataArray, testData]);
});

test("Should Remove Job Application", () => {
  expect(
    jobApplicationsReducer(testDataArray, {
      type: "REMOVE_JOB_APPLICATION",
      id: testDataArray[3].id,
    })
  ).toEqual(testDataArray.slice(0, -1));
});

test("Should NOT Job Application", () => {
  expect(
    jobApplicationsReducer(testDataArray, {
      type: "REMOVE_JOB_APPLICATION",
      id: 2333,
    })
  ).toEqual(testDataArray);
});

test("Should Edit Job Application", () => {
  const action = {
    type: "EDIT_JOB_APPLICATION",
    id: testDataArray[1].id,
    updates: {
      description: testData.description,
      company: testData.company,
      notes: testData.notes,
    },
  };
  const state = jobApplicationsReducer(testDataArray, action);
  expect(state[1].description).toBe(testData.description);
  expect(state[1].company).toBe(testData.company);
  expect(state[1].notes).toBe(testData.notes);
  expect(state[1].id).toBe(testDataArray[1].id);
});

test("Should NOT Edit Job Application", () => {
  const action = {
    type: "EDIT_JOB_APPLICATION",
    id: 2222,
    updates: {
      description: testData.description,
      company: testData.company,
      notes: testData.notes,
    },
  };
  expect(jobApplicationsReducer(testDataArray, action)).toEqual(testDataArray);
});
