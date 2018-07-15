import { DIFF_TYPES } from '../src/constants';
import { filterEventsWithOptions } from '../src/utils';
import defaultOptions from '../src/defaultOptions';

const dummyData = [
  {
    name: 'component.state',
    prev: { a: 1, b: 2, c: 3, d: 4 },
    next: { a: 1, b: 2, d: 4, e: 5 },
    type: DIFF_TYPES.EQUAL,
  },
  {
    name: 'component.props',
    prev: undefined,
    next: undefined,
    type: DIFF_TYPES.EQUAL,
  },
  { name: 'anotherComp.state', prev: {}, next: {}, type: DIFF_TYPES.EQUAL },
  { name: 'anotherComp.props', prev: {}, next: {}, type: DIFF_TYPES.EQUAL },
];

describe('Events should be filtered correctly', () => {
  test('with default options.', () => {
    expect(
      filterEventsWithOptions({
        events: dummyData,
        options: defaultOptions,
      })
    ).toEqual(dummyData.filter((event, index) => ![1].includes(index)));
  });

  test('without empty events.', () => {
    expect(
      filterEventsWithOptions({
        events: dummyData,
        options: {
          ...defaultOptions,
          ...{ showEmptyEvents: false },
        },
      })
    ).toEqual(dummyData.filter((event, index) => index === 0));
  });

  describe('with filtered event types', () => {
    test('of state.', () => {
      expect(
        filterEventsWithOptions({
          events: dummyData,
          options: {
            ...defaultOptions,
            ...{ excludeEventTypes: ['state'] },
          },
        })
      ).toEqual(dummyData.filter((event, index) => index === 3));
    });

    test('of props.', () => {
      expect(
        filterEventsWithOptions({
          events: dummyData,
          options: {
            ...defaultOptions,
            ...{ excludeEventTypes: ['props'] },
          },
        })
      ).toEqual(dummyData.filter((event, index) => [0, 2].includes(index)));
    });

    test('of state and props.', () => {
      expect(
        filterEventsWithOptions({
          events: dummyData,
          options: {
            ...defaultOptions,
            ...{ excludeEventTypes: ['props', 'state'] },
          },
        })
      ).toEqual([]);
    });
  });

  test('with certain components excluded.', () => {
    expect(
      filterEventsWithOptions({
        events: dummyData,
        options: {
          ...defaultOptions,
          ...{ excludeComponents: ['anotherComp'] },
        },
      })
    ).toEqual(dummyData.filter((event, index) => index === 0));
  });

  test('with certain event keys filtered.', () => {
    expect(
      filterEventsWithOptions({
        events: dummyData,
        options: {
          ...defaultOptions,
          ...{ filterEventKeys: ['a', 'b', 'c'] },
        },
      })
    ).toEqual([
      {
        name: 'component.state',
        prev: { a: 1, b: 2, c: 3 },
        next: { a: 1, b: 2 },
        type: DIFF_TYPES.EQUAL,
      },
      dummyData[2],
      dummyData[3],
    ]);
  });
});
