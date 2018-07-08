import React from "react";

import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";

class DemoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textProp: "",
      booleanProp: true,
      numberProp: 1,
      objectProp: { 2: 3 },
      arrayProp: [4, 5]
    };
  }

  componentDidMount() {
    if (this.props.delayed) {
      this.timer = setTimeout(() => {
        this.setState(previousState => previousState);
      }, 5000);
    }
  }

  componentWillUnmount() {
    // if (this.props.delayed) {
    //   clearTimeout(this.timer);
    // }
  }

  render() {
    const Component = this.props.component
      ? this.props.component
      : props => <button {...props} />;
    return (
      <Component onClick={() => this.setState(previousState => previousState)}>
        DemoComponent
      </Component>
    );
  }
}

storiesOf("Lifecycle addon", module)
  .add("Single component events", () => <DemoComponent />)
  .add("Multiple component events", () => <DemoComponent component={Button} />)
  .add("With an async update", () => (
    <div>
      Browse to another panel and inspect the Lifecycle panel.
      <DemoComponent delayed />
    </div>
  ));

storiesOf("Lifecycle addon|Options", module)
  .add(
    "with empty events disabled",
    () => <DemoComponent component={Button} />,
    {
      lifecycle: {
        showEmptyEvents: false
      }
    }
  )
  .add(
    "with excluded event types",
    () => <DemoComponent component={Button} />,
    {
      lifecycle: {
        excludeEventTypes: ["props"]
      }
    }
  )
  .add(
    "with included object keys",
    () => <DemoComponent component={Button} />,
    {
      lifecycle: {
        filterEventKeys: ["booleanProp", "numberProp", "arrayProp"]
      }
    }
  )
  .add(
    "with excluded events from specific components",
    () => <DemoComponent component={Button} />,
    {
      lifecycle: {
        excludeComponents: ["Button"]
      }
    }
  );
