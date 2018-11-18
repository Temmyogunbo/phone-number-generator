import {
  generatePhoneNumbers,
  sortPhoneNumbers,
  convertToNumber,
  findMaxAndMinNumbers,
  mapStringToNumbers,
  findMaxAndMinPhoneNumber,
  getTotalPhoneNumbers,
  getMaxMinNumberPhoneNumber
} from "../utils";

describe("utils", () => {
  it("should generate phone numbers with lenth of 10 digits each", () => {
    const phoneNumbers = generatePhoneNumbers();
    phoneNumbers.forEach(phoneNumber => {
      expect(phoneNumber.length).toBe(10);
    });
  });

  it("should sort phone numbers", () => {
    const unSortNumbers = ["0977258955", "0008623517", "0013548266"];
    const sortedNumbers = ["0008623517", "0013548266", "0977258955"];

    expect(sortPhoneNumbers(unSortNumbers)).toEqual(sortedNumbers);
  });
  it("should convert to numbers", () => {
    const phoneNumbersInString = ["0977258955", "0008623517", "0013548266"];
    const phoneNumbersInNumbers = [977258955, 8623517, 13548266];

    expect(convertToNumber(phoneNumbersInString)).toEqual(
      phoneNumbersInNumbers
    );
  });

  it("should find max and min numbers", () => {
    const numbers = [977258955, 8623517, 13548266];
    const findMaxMinNumbers = findMaxAndMinNumbers(numbers);

    expect(findMaxMinNumbers.max).toEqual(977258955);
    expect(findMaxMinNumbers.min).toEqual(8623517);
  });

  it("should map phone numbers in strings to itself in numbers", () => {
    const numbersInString = ["0977258955", "0008623517", "0013548266"];
    const stringToNumbers = {
      "0977258955": 977258955,
      "0008623517": 8623517,
      "0013548266": 13548266
    };

    expect(mapStringToNumbers(numbersInString)).toEqual(stringToNumbers);
  });

  it("should get total phone numbers", () => {
    const phoneNumbers = ["0977258955", "0008623517", "0013548266"];

    expect(getTotalPhoneNumbers(phoneNumbers)).toEqual(3);
  });

  it("should find max and min phone numbers", () => {
    const numbers = { min: 8623517, max: 977258955 };
    const phoneNumbers = {
      "0977258955": 977258955,
      "0008623517": 8623517,
      "0013548266": 13548266
    };
    const maxAndMinPhoneNumber = findMaxAndMinPhoneNumber(
      numbers,
      phoneNumbers
    );
    expect(maxAndMinPhoneNumber.minNumber).toEqual("0008623517");
    expect(maxAndMinPhoneNumber.maxNumber).toEqual("0977258955");
  });

  it("should get max and min phone numbers", () => {
    const phoneNumbers = ["0977258955", "0008623517", "0013548266"];
    const maxAndMinPhoneNumber = getMaxMinNumberPhoneNumber(phoneNumbers);

    expect(maxAndMinPhoneNumber.minNumber).toEqual("0008623517");
    expect(maxAndMinPhoneNumber.maxNumber).toEqual("0977258955");
  });
});
