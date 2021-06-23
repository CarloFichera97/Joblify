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

test("Should change Role Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "role";
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("role")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

///FAIL - TO ADD INPUT RESTRICTIONS
test("Should Not change Role Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "role";
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("role")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Should NOT change Salary Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "salary";
  wrapper.find("input").at(2).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("salary")).toBe("");
  expect(wrapper).toMatchSnapshot();
});

test("Should not change salary Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "21321321";
  wrapper.find("input").at(2).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("salary")).toBe("");
  expect(wrapper).toMatchSnapshot();
});

test("Should change salary Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "1321";
  wrapper.find("input").at(2).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("salary")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Should change Role Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "Description";
  wrapper.find("input").at(3).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("description")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Should change Description Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "9999";
  wrapper.find("input").at(3).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("description")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Should change Status Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "status";
  wrapper.find("input").at(4).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("status")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Should change Status Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "9999";
  wrapper.find("input").at(4).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("status")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Should change Recruiter Name Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "RECRUITER FULL NAME";
  wrapper.find("input").at(5).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("recruiterFullName")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Should change Recruiter Email Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "RECRUITER EMAIL";
  wrapper.find("input").at(6).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("recruiterEmail")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Should NOT change Recruiter Phone Number Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "RECRUITER PHONE NUMBER";
  wrapper.find("input").at(7).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("recruiterPhoneNumber")).toBe("");
  expect(wrapper).toMatchSnapshot();
});

test("Should NOT change Recruiter Phone Number Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "22";
  wrapper.find("input").at(7).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("recruiterPhoneNumber")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Should change textarea Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "textarea";
  wrapper.find("textarea").simulate("change", {
    target: { value },
  });
  expect(wrapper.state("notes")).toBe(value);
  expect(wrapper).toMatchSnapshot();
});

test("Should change textarea Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "9999";
  wrapper.find("textarea").simulate("change", {
    target: { value },
  });
  expect(wrapper.state("notes")).toBe(value);
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
    createdOn: 0,
    notes: testDataArray[0].notes,
    recruiterFullName: testDataArray[0].recruiterFullName,
    recruiterEmail: testDataArray[0].recruiterEmail,
    recruiterPhoneNumber: testDataArray[0].recruiterPhoneNumber,
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
