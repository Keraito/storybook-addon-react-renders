import React from "react";
import addons, { makeDecorator } from "@storybook/addons";
import { whyDidYouUpdate } from "why-did-you-update";
import { EVENTS } from "./constants";

const notifier = (
  groupByComponent,
  collapseComponentGroups,
  displayName,
  diffs
) => {
  addons.getChannel().emit(EVENTS.EVENTS, diffs);
};

whyDidYouUpdate(React, { notifier });

export const withLifeCycle = makeDecorator({
  name: "withLifecycle",
  parameterName: "lifecycle",
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    const lifecycleOptions = { ...options, ...parameters };

    channel.emit(EVENTS.INITIALIZATION, lifecycleOptions);
    return getStory(context);
  }
});
