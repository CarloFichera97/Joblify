import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import JobForm from "./../../components/JobForm";
import { testDataArray, testData } from "./../fixtures/testData";

/// ACTION --- CHANGE INPUT FIELD ENTITLEMENTS//////
test("Should change Company Name Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "Company Name";
  //AT LETS YOU FIND THE FIRST ITEM(THERE ARE MULTIPLE INPUTS)
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("company")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

////////////////////////FAIL/////////////////////////
//Update 09/06/2021 - The test is a pass, bug found in the
//application, fixed
test("Should change Company Name Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "22";
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("company")).toBe("22");
  expect(wrapper).toMatchSnapshot();
});

test("Should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <JobForm jobApplication={testDataArray[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error")).toBe("");
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    company: testDataArray[0].company,
    role: testDataArray[0].role,
    salary: testDataArray[0].salary,
    description: testDataArray[0].description,
    status: testDataArray[0].status,
    createdOn: moment(),
    notes: testDataArray[0].notes,
  });
});

test("Should change the date state", () => {
  const wrapper = shallow(<JobForm />);
  const now = moment();
  wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);

  expect(wrapper.state("createdOn")).toBe(now);
  expect(wrapper).toMatchSnapshot();
});

test("Should change the calendarFocused state", () => {
  const wrapper = shallow(<JobForm />);
  wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({
    focused: true,
  });

  expect(wrapper.state("calendarFocused")).toBe(true);
  expect(wrapper).toMatchSnapshot();
});
