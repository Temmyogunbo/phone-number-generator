export const sortPhoneNumbers = phoneNumbers => phoneNumbers.sort();

export const convertToNumber = phoneNumbers => phoneNumbers.map(phoneNumber => Number(phoneNumber));

export const findMaxAndMinNumbers = phoneNumbers => ({
  max: Math.max(...phoneNumbers),
  min: Math.min(...phoneNumbers),
});

export const mapStringToNumbers = (numbers) => {
  const mapped = {};
  numbers.reduce((currentValue, number) => {
    mapped[number] = Number(number);
  }, {});
  return mapped;
};

export const findMaxAndMinPhoneNumber = (numbers, phoneNumbers) => {
  const maxMinNumber = {};
  Object.keys(phoneNumbers).map((key) => {
    phoneNumbers[key] === numbers.max && (maxMinNumber.maxNumber = key);

    phoneNumbers[key] === numbers.min && (maxMinNumber.minNumber = key);
  });

  return maxMinNumber;
};

export const getTotalPhoneNumbers = phoneNumbers => phoneNumbers.length;

export const generatePhoneNumbers = (number = 10) => {
  const phoneNumbers = [];
  for (let index = 0; index < number; index += 1) {
    const phoneNumber = `0${Math.random()
      .toString()
      .slice(2, 11)}`;
    phoneNumbers.push(phoneNumber);
  }
  return phoneNumbers;
};

export const getMaxMinNumberPhoneNumber = (phoneNumbers) => {
  const stringToNumbers = mapStringToNumbers(phoneNumbers);
  const getMaxMinNumber = findMaxAndMinNumbers(convertToNumber(phoneNumbers));
  const maxMinNumber = findMaxAndMinPhoneNumber(getMaxMinNumber, stringToNumbers);
  return maxMinNumber;
};
