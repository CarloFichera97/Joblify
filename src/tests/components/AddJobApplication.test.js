import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import { AddJobApplication } from "./../../components/AddJobApplication";
import { testDataArray, testData } from "./../fixtures/testData";

let onSubmit, history, wrapper, startAddJobApplication;

beforeEach(() => {
  onSubmit = jest.fn();
  startAddJobApplication = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddJobApplication
      onSubmit={onSubmit}
      startAddJobApplication={startAddJobApplication}
      history={history}
    />
  );
});
test("Should render AddJobApplication Correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit ", () => {
  wrapper.find("JobForm").prop("onSubmit")(testDataArray[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddJobApplication).toHaveBeenLastCalledWith(testDataArray[0]);
  expect(wrapper).toMatchSnapshot();
});
