import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import { EditJobApplication } from "./../../components/EditJobApplication";
import { testDataArray, testData } from "./../fixtures/testData";

let onSubmit, history, onClick, wrapper;
beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  onClick = jest.fn();
  wrapper = shallow(
    <EditJobApplication
      onSubmit={onSubmit}
      history={history}
      onClick={onClick}
    />
  );
});

test("Should render EditJobApplication Correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit ", () => {
  wrapper.find("JobForm").prop("onSubmit")(testDataArray[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(onSubmit).toHaveBeenLastCalledWith(testDataArray[0]);
  expect(wrapper).toMatchSnapshot();
});

test("onClick called", () => {
  const wrapper = shallow(<button onClick={onClick} />);
  wrapper.find("button").simulate("click", "");
  expect(onClick.mock.calls.length).toEqual(1);
});

test("Should handle onClick ", () => {
  const wrapper = shallow(<button onClick={onClick} />);
  wrapper.find("button").prop("onClick")(testDataArray[0].id);
  expect(onClick).toHaveBeenLastCalledWith(testDataArray[0].id);
  expect(wrapper).toMatchSnapshot();
});
