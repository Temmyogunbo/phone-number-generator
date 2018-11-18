export const Box = ({ Component = "div", ...otherProps }) => (
  <Component {...otherProps} />
);
