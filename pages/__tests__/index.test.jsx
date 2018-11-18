import React from "react";
import { shallow } from "enzyme";
import Index, { RenderMinMaxNumber, RenderPhoneNumbersList } from "..";

describe("Pages tests", () => {
  describe('Generate Page', () => {  const props = { phoneNumbers: "0821517432\n0481834224" };

  it("should render", () => {
    const component = shallow(<Index {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should render", async () => {
    const component = shallow(<RenderPhoneNumbersList {...props} />);
    expect(component).toMatchSnapshot();
  });

  it("should render", async () => {
    const props = {
      maxMinNumber: { minNumber: "0080235358", maxNumber: "0774369284" },
      totalNumbers: 10
    };
    const component = shallow(<RenderMinMaxNumber {...props} />);
    expect(component).toMatchSnapshot();
  });})

});

