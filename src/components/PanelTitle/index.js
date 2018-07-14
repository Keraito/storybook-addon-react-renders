import React from "react";
import { WithLifecycleNotifications } from "../../containers/WithLifecycleNotifications";
import { Indicator, PanelWrapper } from "./style";

const PanelTitle = props => (
  <WithLifecycleNotifications
    render={({ amountUnreadEvents, options }) => (
      <PanelWrapper>
        <div>Lifecycle</div>
        {amountUnreadEvents > 0 ? (
          <Indicator color={"LIGHTSLATEGRAY"} size={13}>
            {options.disableNotificationsNumber ? null : amountUnreadEvents}
          </Indicator>
        ) : null}
      </PanelWrapper>
    )}
    {...props}
  />
);

export default PanelTitle;
