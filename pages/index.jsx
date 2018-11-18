import React from "react";
import link from "next/link";
import { css } from "glamor";
import { Box } from "../components/base/box";
import { getPhoneNumbers } from "../lib/phoneNumbers";
import {
  sortPhoneNumbers,
  getTotalPhoneNumbers,
  getMaxMinNumberPhoneNumber
} from "../lib/utils";

const indexStyles = css({
  display: "flex",
  flex: "1",
  justifyContent: "center",
  flexDirection: "row"
});

const minMaxNumberStyles = css({ marginBottom: "10px", padding: "5px" });
const renderMinMaxNumberStyles = css({
  marginTop: "40px",
  display: "flex",
  flexDirection: "column"
});

export const RenderMinMaxNumber = ({ maxMinNumber, totalNumbers }) => (
  <Box {...renderMinMaxNumberStyles}>
    <Box {...minMaxNumberStyles}>Minimum Number: {maxMinNumber.minNumber}</Box>
    <Box {...minMaxNumberStyles}>Maximum Number: {maxMinNumber.maxNumber}</Box>
    <Box {...css({ padding: "5px" })}>
      Total numbers generated: {totalNumbers}
    </Box>
  </Box>
);

export const RenderPhoneNumbersList = ({ newPhoneNumbers = [] }) => (
  <Box Component="ol">
    {newPhoneNumbers.map((phoneNumber, index) => (
      <Box
        Component="li"
        key={`phone-number${index}`}
        {...css({ marginTop: "8px", padding: "2px" })}
      >
        {`${phoneNumber}`}
      </Box>
    ))}
  </Box>
);

export default class Index extends React.Component {
  static async getInitialProps() {
    let res;
    try {
      res = await getPhoneNumbers();
    } catch (error) {
      return error;
    }
    return { phoneNumbers: res.data };
  }

  render() {
    const phoneNumbers = this.props.phoneNumbers.split("\n") || [];
    phoneNumbers.pop();
    const newPhoneNumbers = sortPhoneNumbers(phoneNumbers);
    const totalNumbers = getTotalPhoneNumbers(phoneNumbers);
    const maxMinNumber = getMaxMinNumberPhoneNumber(phoneNumbers);

    return (
      <Box {...indexStyles}>
        {newPhoneNumbers.length ? (
          <Box
            {...css({
              padding: "4px",
              marginRight: "30px",
              justifyContent: "center"
            })}
          >
            <Box {...css({fontSize: '24px', textDecoration: 'underline'})}> Phone Numbers</Box>
            <RenderPhoneNumbersList newPhoneNumbers={newPhoneNumbers} />
          </Box>
        ) : (
          <React.Fragment>
            <Box>There are no phone phone numbers.</Box>
            <Box>
              Click{" "}
              <Box Component={link} href="/generator">
                here
              </Box>{" "}
              to generate
            </Box>
          </React.Fragment>
        )}

        <RenderMinMaxNumber
          maxMinNumber={maxMinNumber}
          totalNumbers={totalNumbers}
        />
      </Box>
    );
  }
}
