import React from "react";
import addons from "@storybook/addons";
import PanelTitle from "./components/PanelTitle";
import Panel from "./components/Panel";
import { ADDON_NAME } from "./constants";

// Register the addon with a unique name.
addons.register(ADDON_NAME, api => {
  // Also need to set a unique name to the panel.
  addons.addPanel(`${ADDON_NAME}/panel`, {
    title: () => <PanelTitle channel={addons.getChannel()} api={api} />,
    render: ({ active }) => (
      <Panel channel={addons.getChannel()} api={api} active={active} />
    )
  });
});
