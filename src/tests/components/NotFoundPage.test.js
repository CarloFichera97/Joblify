import React from "react";
import NotFoundPage from "../../components/NotFoundPage";
import { shallow } from "enzyme";

test("Should render Not Found Page correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
