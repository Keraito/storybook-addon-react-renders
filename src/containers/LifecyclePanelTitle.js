import React from "react";
import styled from "react-emotion";
import { WithLifecycleNotifications } from "../components/WithLifecycleNotifications";
import Indicator from "./Indicator";

const PanelWrapper = styled("div")({
  display: "flex",
  alignItems: "center"
});

const PanelName = styled("div")({
  paddingRight: 5
});

export const LifecyclePanelTitle = props => (
  <WithLifecycleNotifications
    render={({ amountUnreadEvents }) => (
      <PanelWrapper>
        <PanelName>Lifecycle</PanelName>
        {amountUnreadEvents > 0 ? (
          <Indicator color={"DARKORANGE"} size={10} />
        ) : null}
      </PanelWrapper>
    )}
    {...props}
  />
);
