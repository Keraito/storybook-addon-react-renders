import React from "react";
import { WithRendersNotifications } from "../../containers/WithRendersNotifications";
import { Indicator, PanelWrapper } from "./style";

const PanelTitle = props => (
  <WithRendersNotifications
    render={({ amountUnreadEvents, options }) => (
      <PanelWrapper>
        <div>Renders</div>
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
