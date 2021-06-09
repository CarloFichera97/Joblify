import React from "react";
import HelpPage from "../../components/HelpPage";
import { shallow } from "enzyme";

test("Should render Help Page correctly", () => {
  const wrapper = shallow(<HelpPage />);
  expect(wrapper).toMatchSnapshot();
});
