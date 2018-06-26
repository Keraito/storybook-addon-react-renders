import React from "react";
import addons from "@storybook/addons";
import { LifecyclePanelTitle } from "./containers/LifecyclePanelTitle";
import { LifecyclePanel } from "./containers/LifecyclePanel";

// Register the addon with a unique name.
addons.register("keraito/lifecycle", api => {
  // Also need to set a unique name to the panel.
  addons.addPanel("keraito/lifecycle/panel", {
    title: () => (
      <LifecyclePanelTitle channel={addons.getChannel()} api={api} />
    ),
    render: () => <LifecyclePanel channel={addons.getChannel()} api={api} />
  });
});
