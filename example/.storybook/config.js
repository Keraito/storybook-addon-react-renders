import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { withRenders } from "../../src";

addDecorator(withRenders);

setOptions({
  name: "REACT RENDERS",
  hierarchySeparator: /\|/
});

// automatically import all files ending in *.stories.js
function loadStories() {
  require("../index.stories");
}

configure(loadStories, module);
