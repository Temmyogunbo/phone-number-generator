import React from "react";
import { Box } from "../box";
import { shallow } from "enzyme";

describe("Box tests", () => {
  const wrapper = shallow(<Box />);

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
