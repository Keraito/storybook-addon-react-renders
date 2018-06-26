import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { withLifeCycle } from "../src";

addDecorator(withLifeCycle);

setOptions({
  hierarchySeparator: /\|/
});

// automatically import all files ending in *.stories.js
const req = require.context("../example", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
