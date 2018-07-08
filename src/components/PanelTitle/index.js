import React from "react";
import styled from "react-emotion";
import { WithLifecycleNotifications } from "../../containers/WithLifecycleNotifications";
import { Indicator } from "./style";

const PanelWrapper = styled("div")({
  display: "flex",
  alignItems: "center"
});

const PanelName = styled("div")({
  paddingRight: 5
});

const PanelTitle = props => (
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

export default PanelTitle;
