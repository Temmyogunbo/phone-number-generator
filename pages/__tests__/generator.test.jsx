import React from "react";
import Generator, {
  PhoneNumbersList,
  getPhoneNumbers,
  storePhoneNumber
} from "../Generator";
import { shallow, mount, render } from "enzyme";

describe("Pages tests", () => {
  describe("Generator Page", () => {
    const props = { phoneNumbers: "0821517432\n0481834224" };
    const wrapper = mount(<Generator />);
    const mockComponent = {
      setState() {}
    };
    it("should match snapshot", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("should match snapshot", () => {
      const props = ["0977258955", "0008623517", "0013548266"];
      const component = shallow(<PhoneNumbersList {...props} />);
      expect(component).toMatchSnapshot();
    });

    it("should call handlePhoneNumbers method on mouse click", () => {
      const handlePhoneNumbersSpy = jest.spyOn(
        wrapper.instance(),
        "handlePhoneNumbers"
      );
      wrapper
        .find(".phone-numbers")
        .first()
        .simulate("click");
      expect(handlePhoneNumbersSpy).toHaveBeenCalledTimes(1);
    });

    it("should call  handleStorage method on mouse click", () => {
      const handleStorageSpy = jest.spyOn(wrapper.instance(), "handleStorage");
      wrapper
        .find(".store-number")
        .first()
        .simulate("click");
      expect(handleStorageSpy).toHaveBeenCalledTimes(1);
    });

    it("should get phone numbers", () => {
      const phoneNumbers = getPhoneNumbers.bind(mockComponent)();
      expect(phoneNumbers.length).toEqual(10);
    });

    it("should store phone numbers", async () => {
      const res = await storePhoneNumber.bind(mockComponent)();
      expect(res).toBe(true);
    });
  });
});
