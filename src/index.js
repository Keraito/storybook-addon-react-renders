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

export const withRenders = makeDecorator({
  name: "withRenders",
  parameterName: "renders",
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { options, parameters }) => {
    const channel = addons.getChannel();
    const rendersOptions = { ...options, ...parameters };

    channel.emit(EVENTS.INITIALIZATION, rendersOptions);
    return getStory(context);
  }
});
