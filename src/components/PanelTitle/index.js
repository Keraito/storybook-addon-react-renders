import React from "react";
import { WithLifecycleNotifications } from "../../containers/WithLifecycleNotifications";
import { Indicator, PanelName, PanelWrapper } from "./style";

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
