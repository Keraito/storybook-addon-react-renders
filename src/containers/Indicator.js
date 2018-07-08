import styled from "react-emotion";

export default styled("div")(
  ({ color, size }) => ({
    boxSizing: "border-box",
    padding: `0 ${size / 2}px`,
    minWidth: size,
    minHeight: size,
    fontSize: size / 1.4,
    lineHeight: `${size}px`,
    color: "white",
    textTransform: "uppercase",
    borderRadius: size / 2,
    backgroundColor: color
  }),
  ({ styles }) => ({
    ...styles
  })
);
