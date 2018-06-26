import styled from "react-emotion";

export const Actions = styled("pre")({
  flex: 1,
  margin: 0,
  padding: "8px 2px 20px 0",
  overflowY: "auto",
  color: "#666"
});

export const Action = styled("div")({
  display: "flex",
  padding: "3px 3px 3px 0",
  borderLeft: "5px solid white",
  borderBottom: "1px solid #fafafa",
  transition: "all 0.1s",
  alignItems: "start"
});

export const InspectorContainer = styled("div")({
  flex: 1,
  padding: "0 0 0 5px"
});