import React from "react";
import Generator, {
  PhoneNumbersList,
  getPhoneNumbers,
  storePhoneNumber
} from "../Generator";
import { shallow, mount, render } from "enzyme";

describe("Pages tests", () => {
  describe("Generator Page", () => {
    const props = ["0977258955", "0008623517", "0013548266"];
    const component = mount(<Generator {...props}/>);

    const mockComponent = {
      setState() {}
    };

    it("should match snapshot", () => {

      expect(component).toMatchSnapshot();
    });

    it("should call handlePhoneNumbers method on mouse click", () => {
      const handlePhoneNumbersSpy = jest.spyOn(
        component.instance(),
        "handlePhoneNumbers"
      );

        component.instance().handlePhoneNumbers()
      expect(handlePhoneNumbersSpy).toHaveBeenCalledTimes(1);
    });

    it("should call  handleStorage method on mouse click", () => {
      const handleStorageSpy = jest.spyOn(component.instance(), "handleStorage");
      
      component.instance().handleStorage()

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
