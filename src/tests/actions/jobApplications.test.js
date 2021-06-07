import {
  addJobApplication,
  editJobApplication,
  removeJobApplication,
} from "./../../actions/jobApplications";

import {
  testDataArray,
  testData,
  defaultTestData,
} from "./../fixtures/testData";

test("Should add a Job Application with non default values", () => {
  expect(addJobApplication(testData)).toEqual({
    type: "ADD_JOB_APPLICATION",
    jobApplication: {
      ...testData,
      id: expect.any(String),
    },
  });
});

test("Should add a Job Application with default values", () => {
  expect(addJobApplication()).toEqual({
    type: "ADD_JOB_APPLICATION",
    jobApplication: {
      ...defaultTestData,
      id: expect.any(String),
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
