# Storybook React Renders Addon

> 🔍 Storybook addon to help you identify and inspect potential wasted renders of React components.

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/mixn/carbon-now-cli/blob/master/license) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

_Check out the [Live Storybook demo](https://keraito.github.io/storybook-addon-react-renders/)._

## Description

[Why-did-you-update](https://github.com/maicki/why-did-you-update) by [maicki](https://github.com/maicki) is an awesome tool to notify you of **potential** wasted re-renders by your React components.

However, it requires you to monkey patch your React in development stage and blasts everything to the console.

This library turns it into a storybook addon and redirects all the log events into the storybook panel for you to inspect.

## Features

- 🔥 Shows when **potential** wasted re-renders happen in your React components.
- 🔍 Allows to inspect the state and props before and after the re-render.
- ❗️ Notifies you of events while running on the background.
- ⚡️ Creates powerful integrations with Storybook addons (like [knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs)).
- 🔧 Configurable in different ways to filter events and objects to what's interesting to you.
- 👍 Seperates it from your production code.
- ⛏ Maintained.

## Getting Started

### Installation

```
$ npm install --save-dev storybook-addon-react-renders
```

or

```
$ yarn add --dev storybook-addon-react-renders
```

### Register

Register the addon at your `.storybook/addons.js` file.

```js
import "storybook-addon-react-renders/register";
```

## Usage

To globally use this addon across all your stories, add it as a decorator to your `.storybook/config.js` file.

```js
import { configure, addDecorator } from "@storybook/react";
import { withRenders } from "storybook-addon-react-renders";

addDecorator(withRenders);
```

Or add it on an indivual basis to your stories.

```js
// A stories file
import { withRenders } from "storybook-addon-react-renders";

storiesOf("A story with renders addon", module)
  .addDecorator(withRenders)
  .add("story title", <StoryComponent />, {
    renders: {
      // Options
    }
  });
```

## Options

Configuration parameters can be set at 3 different locations: passed as default options along the addDecorator call, passed as an object of parameters to a book of stories to the `addParameters` call, and passed as direct parameters to each individual story with the `renders` key (see the last example in [_usage_](#Usage)).

```js
{
  /**
   * Whether to display events with empty incoming objects.
   * @default true
   */
  showEmptyEvents: boolean,
  /**
   * List of event types to exclude.
   * @default []
   */
  excludeEventTypes: Array<"props" | "state">,
  /**
   * A list of keys to filter the incoming objects of the events. Unless empty, only these keys will be shown in the objects.
   * @default []
   */
  filterEventKeys: Array<String>,
  /**
   * A list of components of which the events will not be displayed in the storybook panel.
   * @default []
   */
  excludeComponents: Array<String>,
  /**
   * Whether to show the amount of new renders events in the panel title.
   * @default false
   */
  disableNotificationsNumber: boolean
}
```

## Contributing

Ideas and contributions are welcome! 🎉

## License

MIT © [Chak Shun Yu](https://twitter.com/keraito)
