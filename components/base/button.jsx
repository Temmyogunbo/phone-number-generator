import { Box } from "./box";
import { css } from "glamor";

const buttonStyles = css({
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    textTransform: 'uppercase',
    width: '15%',
    borderRadius: '16px',
    outline: 'none',
    ':hover': {
      cursor: 'pointer'
    }
});

export const Button = ({ children, disabled = false, ...otherProps }) => (
  <Box
    Component="button"
    type="button"
    data-button
    disabled={disabled}
    {...buttonStyles}
    {...otherProps}
  >
    {children}
  </Box>
);
