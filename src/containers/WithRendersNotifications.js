import React from "react";
import { EVENTS } from "../constants";
import defaultOptions from "../defaultOptions";

export class WithRendersNotifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amountUnreadEvents: 0, options: defaultOptions };
    this.updateUnreadEvents = this.updateUnreadEvents.bind(this);
    this.clearUnreadEvents = this.clearUnreadEvents.bind(this);
    this.changeOptions = this.changeOptions.bind(this);
  }

  componentDidMount() {
    const { channel, api } = this.props;
    channel.on(EVENTS.INITIALIZATION, this.changeOptions);
    channel.on(EVENTS.OPEN_PANEL, this.clearUnreadEvents);
    channel.on(EVENTS.UNREAD_EVENTS, this.updateUnreadEvents);

    // Clear the current state on every change.
    this.stopListeningOnStory = api.onStory(() => {
      this.setState({
        amountUnreadEvents: 0,
        options: defaultOptions
      });
    });
  }

  changeOptions(options) {
    this.setState({ options: { ...defaultOptions, ...options } });
  }

  updateUnreadEvents(amountUnreadEvents) {
    this.setState(previousState => ({
      amountUnreadEvents: previousState.amountUnreadEvents + amountUnreadEvents
    }));
  }

  clearUnreadEvents() {
    this.setState({ amountUnreadEvents: 0 });
  }

  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel } = this.props;
    channel.removeListener(EVENTS.INITIALIZATION, this.changeOptions);
    channel.removeListener(EVENTS.OPEN_PANEL, this.clearUnreadEvents);
    channel.removeListener(EVENTS.UNREAD_EVENTS, this.updateUnreadEvents);
  }

  render() {
    return this.props.render(this.state);
  }
}
