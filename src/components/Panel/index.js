import React from "react";
import { Inspector } from "react-inspector";
import { Actions, Action, InspectorContainer } from "./style";
import { formatTitle } from "../../utils";
import { WithLifecycleEvents } from "../../containers/WithLifecycleEvents";

const Panel = props => (
  <WithLifecycleEvents
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

export default Panel;
