import styled from "react-emotion";

/*
  The Indicator component comes from:
  https://github.com/storybooks/storybook/blob/f49c44482618ca77e8134b53aba58d6138b662ed/addons/jest/src/components/Indicator.js
*/

export const Indicator = styled("div")(
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

export const PanelWrapper = styled("div")({
  display: "flex",
  alignItems: "center"
});

export const PanelName = styled("div")({
  paddingRight: 5
});
