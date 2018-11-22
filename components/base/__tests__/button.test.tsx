import React from "react";
import { Button } from "../button";
import { shallow } from "enzyme";

describe("Button tests", () => {
  const wrapper = shallow(<Button />);

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
