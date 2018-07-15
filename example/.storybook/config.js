import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { withLifeCycle } from "../../src";

addDecorator(withLifeCycle);

setOptions({
  name: "REACT LIFECYCLE ADDON",
  hierarchySeparator: /\|/
});

// automatically import all files ending in *.stories.js
function loadStories() {
  require('../index.stories')
}

configure(loadStories, module);
