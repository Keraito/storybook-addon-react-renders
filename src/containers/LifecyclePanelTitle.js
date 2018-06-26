import React from "react";
import { WithLifecycleNotifications } from "../components/WithLifecycleNotifications";

export const LifecyclePanelTitle = props => (
  <WithLifecycleNotifications render={() => <div>LifeCycle</div>} {...props} />
);
