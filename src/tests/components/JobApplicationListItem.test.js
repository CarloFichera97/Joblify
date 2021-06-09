import React from "react";
import { shallow } from "enzyme";
import { JobApplicationList } from "../../components/JobApplicationList";
import { testDataArray } from "./../fixtures/testData";

test("Should render Job Application List correctly with inputs", () => {
  const wrapper = shallow(
    <JobApplicationList jobApplications={testDataArray} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("Should render Job Application List correctly with no inputs", () => {
  const wrapper = shallow(<JobApplicationList jobApplications={[]} />);
  expect(wrapper).toMatchSnapshot();
});
