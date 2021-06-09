import React from "react";
import moment from "moment";
import { shallow } from "enzyme";
import JobForm from "./../../components/JobForm";

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
test("Should change Company Name Input", () => {
  const wrapper = shallow(<JobForm />);
  const value = "22";
  //AT LETS YOU FIND THE FIRST ITEM(THERE ARE MULTIPLE INPUTS)
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(wrapper.state("company")).toBe("");
  expect(wrapper).toMatchSnapshot();
});
