import React from "react";
import { WithLifecycleEvents } from "./WithLifecycleEvents";

const isEmptyObject = object => !Object.keys(object).length;

export const WithOptions = ({ render, ...rest }) => (
  <WithLifecycleEvents
    render={({ events, options }) => {
      const falsyFilteredEvents = events.filter(event => event.prev);

      const typeFilteredEvents = options.excludeEventTypes.length
        ? falsyFilteredEvents.filter(
            event => !options.excludeEventTypes.includes(event.name.split[1])
          )
        : falsyFilteredEvents;

      const propFilteredEvents = options.filterEventKeys.length
        ? typeFilteredEvents.map(event => ({
            ...event,
            ...filterAllowedKeysFromPrevAndNext({
              allowedKeys: options.filterEventKeys,
              prev: event.prev,
              next: event.next
            })
          }))
        : typeFilteredEvents;

      const emptyFilteredEvents = options.showEmptyEvents
        ? propFilteredEvents
        : propFilteredEvents.filter(event => !isEmptyObject(event.prev));

      return render({ events: emptyFilteredEvents, options });
    }}
    {...rest}
  />
);

// TODO: Merge these together for performance reasons.
const filterAllowedKeysFromPrevAndNext = ({ allowedKeys, prev, next }) => ({
  prev: filterAllowedKeysFromObject({ allowedKeys, object: prev }),
  next: filterAllowedKeysFromObject({ allowedKeys, object: next })
});

const filterAllowedKeysFromObject = ({ allowedKeys, object }) =>
  Object.keys(object)
    .filter(key => allowedKeys.includes(key))
    .reduce((obj, key) => ({ ...obj, [key]: object[key] }), {});
