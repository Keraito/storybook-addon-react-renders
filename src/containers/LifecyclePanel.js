import React from "react";
import { Inspector } from "react-inspector";
import { Actions, Action, InspectorContainer } from "./style";
import { formatTitle } from "../utils";
import { WithOptions } from "../components/WithOptions";

export const LifecyclePanel = props => (
  <WithOptions
    render={({ events }) => (
      <Actions>
        {events.map(({ name, prev, next, type }, index) => (
          <Action key={index}>
            <InspectorContainer>
              <Inspector
                sortObjectKeys
                showNonenumerable={false}
                name={formatTitle({ name, type })}
                data={{ before: prev, after: next }}
              />
            </InspectorContainer>
          </Action>
        ))}
      </Actions>
    )}
    {...props}
  />
);
