import React from "react";
import Events from "../events";
import defaultOptions from "../defaultOptions";

export class WithLifecycleEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [], options: defaultOptions };
    this.onAddEvents = this.onAddEvents.bind(this);
    this.changeOptions = this.changeOptions.bind(this);
    this.notifyUnreadEvents = this.notifyUnreadEvents.bind(this);
  }

  componentDidMount() {
    const { channel, api } = this.props;
    // Listen to the notes and render it.
    channel.on(Events.EVENTS, this.onAddEvents);
    channel.on(Events.INITIALIZATION, this.changeOptions);

    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.setState({
        events: [],
        options: defaultOptions
      });
    });
  }

  changeOptions(options) {
    this.setState({ options: { ...defaultOptions, ...options } });
  }

  onAddEvents(events) {
    this.setState(
      previousState => ({
        events: previousState.events.concat(events)
      }),
      () => this.notifyUnreadEvents(events.length)
    );
  }

  notifyUnreadEvents(amountUnreadEvents) {
    const { channel, active } = this.props;
    if (!active) {
      // TODO: This only provides the amount of unprocessed events
      channel.emit(Events.UNREAD_EVENTS, amountUnreadEvents);
    }
  }

  // This is some cleanup tasks when the panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel } = this.props;
    channel.removeListener(Events.EVENTS, this.onAddEvents);
    channel.removeListener(Events.INITIALIZATION, this.changeOptions);
  }

  render() {
    return this.props.render(this.state);
  }
}
