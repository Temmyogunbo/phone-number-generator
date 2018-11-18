import React from "react";
import axios from "axios";
import { getPhoneNumbers, storePhoneNumbers } from "../phoneNumbers";

jest.mock("axios");

test("should get phone numbers", async () => {
  const resp = { phoneNumbers: ["0098764329"] };
  axios.get.mockImplementation(() => Promise.resolve(resp))

  const phoneNumbers = await getPhoneNumbers();
  expect(phoneNumbers).toEqual(resp);
});

test("should store phone numbers", async () => {
  const phoneNumbers = {phoneNumbers: ['09876543567']}
  const resp = { message: "Phone numbers successfully saved" };
  axios.post.mockImplementation(() => Promise.resolve(resp))

  const message = await storePhoneNumbers(phoneNumbers);
  expect(message).toEqual(resp);
});