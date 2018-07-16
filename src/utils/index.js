import { DIFF_TYPES } from "../constants";

export const formatTitle = ({ name, type }) => {
  switch (type) {
    case DIFF_TYPES.SAME:
      return `${name}: Value is the same (equal by reference).`;
    case DIFF_TYPES.EQUAL:
      return `${name}: Value did not change.`;
    case DIFF_TYPES.FUNCTIONS:
      return `${name}: Changes are in functions only.`;
    default:
      return name;
  }
};

export const filterEventsWithOptions = ({ events, options }) => {
  const falsyFilteredEvents = events.filter(event => event.prev);

  const componentAndTypeFilteredEvents =
    options.excludeComponents.length || options.excludeEventTypes.length
      ? falsyFilteredEvents.filter(event => {
          const [component, type] = event.name.split(".");
          return (
            !options.excludeEventTypes.includes(type) &&
            !options.excludeComponents.includes(component)
          );
        })
      : falsyFilteredEvents;

  const propFilteredEvents = options.filterEventKeys.length
    ? componentAndTypeFilteredEvents.map(event => ({
        ...event,
        ...filterAllowedKeysFromPrevAndNext({
          allowedKeys: options.filterEventKeys,
          prev: event.prev,
          next: event.next
        })
      }))
    : componentAndTypeFilteredEvents;

  const emptyFilteredEvents = options.showEmptyEvents
    ? propFilteredEvents
    : propFilteredEvents.filter(event => !isEmptyObject(event.prev));

  return emptyFilteredEvents;
};

const isEmptyObject = object => !Object.keys(object).length;

// TODO: Merge these together for performance reasons.
const filterAllowedKeysFromPrevAndNext = ({ allowedKeys, prev, next }) => ({
  prev: filterAllowedKeysFromObject({ allowedKeys, object: prev }),
  next: filterAllowedKeysFromObject({ allowedKeys, object: next })
});

const filterAllowedKeysFromObject = ({ allowedKeys, object }) =>
  Object.keys(object)
    .filter(key => allowedKeys.includes(key))
    .reduce((obj, key) => ({ ...obj, [key]: object[key] }), {});
