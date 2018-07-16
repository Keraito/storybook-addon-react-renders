import React from "react";
import { EVENTS } from "../constants";
import { filterEventsWithOptions } from "../utils";
import defaultOptions from "../defaultOptions";

export class WithRendersEvents extends React.Component {
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
    channel.on(EVENTS.EVENTS, this.onAddEvents);
    channel.on(EVENTS.INITIALIZATION, this.changeOptions);

    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.setState({
        events: [],
        options: defaultOptions
      });
    });
  }

  componentDidUpdate(prevProps) {
    const { active, channel } = this.props;
    if (prevProps.active !== active && active) {
      channel.emit(EVENTS.OPEN_PANEL);
    }
  }

  changeOptions(options) {
    this.setState({ options: { ...defaultOptions, ...options } });
  }

  onAddEvents(events) {
    const filteredEvents = filterEventsWithOptions({
      events,
      options: this.state.options
    });
    this.setState(
      previousState => ({
        events: previousState.events.concat(filteredEvents)
      }),
      () => this.notifyUnreadEvents(filteredEvents.length)
    );
  }

  notifyUnreadEvents(amountUnreadEvents) {
    const { channel, active } = this.props;
    if (!active) {
      channel.emit(EVENTS.UNREAD_EVENTS, amountUnreadEvents);
    }
  }

  // This is some cleanup tasks when the panel is unmounting.
  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel } = this.props;
    channel.removeListener(EVENTS.EVENTS, this.onAddEvents);
    channel.removeListener(EVENTS.INITIALIZATION, this.changeOptions);
  }

  render() {
    return this.props.render(this.state);
  }
}
