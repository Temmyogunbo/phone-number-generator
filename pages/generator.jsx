import React from "react";
import { css } from "glamor";
import { Box } from "../components/base/box";
import { Button } from "../components/base/button";
import { storePhoneNumbers } from "../lib/phoneNumbers";
import { generatePhoneNumbers } from "../lib/utils";
import Router from "next/router";

export const PhoneNumbersList = ({ phoneNumbers = [] }) => (
  <Box
    Component="ol"
    {...css({
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    })}
  >
    {phoneNumbers.map((phoneNumber, index) => (
      <Box
        Component="li"
        key={`phonenumber${index}`}
        {...css({ marginTop: "8px", padding: "2px" })}
      >
        {phoneNumber}
      </Box>
    ))}
  </Box>
);

// ES5 is used because of this
export const getPhoneNumbers = function() {
  const phoneNumbers = generatePhoneNumbers(10);

  this.setState({ phoneNumbers });
  return phoneNumbers;
};

export const storePhoneNumber = async function() {
  let res;
  try {
    const { phoneNumbers } = this.state;
    res = await storePhoneNumbers(phoneNumbers);

    res.data.success && Router.push("/index");
  } catch (error) {
    this.setState({ error: true });
  }
  return true;
};

export default class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumbers: [],
      error: false
    };
  }

  handlePhoneNumbers = () => getPhoneNumbers.bind(this)();

  handleStorage = () => storePhoneNumber.bind(this)();

  render() {
    const { phoneNumbers, error } = this.state;
    return (
      <Box
        {...css({
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        })}
      >
        <Button className="phone-numbers" onClick={() => this.handlePhoneNumbers()}>
          Generate numbers
        </Button>
        {phoneNumbers && <PhoneNumbersList phoneNumbers={phoneNumbers} />}

        {phoneNumbers.length ? (
          <Box
            {...css({
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            })}
          >
            <Button className="store-number" onClick={() => this.handleStorage()}>
              Store Numbers
            </Button>
          </Box>
        ) : null}

        {error && <Box>0ps! An error coccured.</Box>}
      </Box>
    );
  }
}
