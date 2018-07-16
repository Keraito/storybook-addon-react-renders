import React from "react";
import { Inspector } from "react-inspector";
import { Actions, Action, InspectorContainer } from "./style";
import { formatTitle } from "../../utils";
import { WithRendersEvents } from "../../containers/WithRendersEvents";

const Panel = props => (
  <WithRendersEvents
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
