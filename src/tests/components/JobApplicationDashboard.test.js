import React from "react";
import JobApplicationDashboard from "../../components/JobApplicationDashboard";
import { shallow } from "enzyme";

test("Should render Job Application Dashboard correctly", () => {
  const wrapper = shallow(<JobApplicationDashboard />);
  expect(wrapper).toMatchSnapshot();
});
