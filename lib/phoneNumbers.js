import axios from "axios";

export const storePhoneNumbers = async phoneNumbers => {
  let res;
  try {
    return await axios.post("http://localhost:5000/api/v1/phone-numbers", {
      phoneNumbers
    });
  } catch (error) {
    return error;
  }
};

export const getPhoneNumbers = async () => {
  try {
   return await axios.get("http://localhost:5000/api/v1/phone-numbers");
  } catch (error) {
    return error;
  }
};
