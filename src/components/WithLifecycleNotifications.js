import React from "react";
import { EVENTS } from "../constants";

export class WithLifecycleNotifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amountUnreadEvents: 0 };
    this.updateUnreadEvents = this.updateUnreadEvents.bind(this);
    this.clearUnreadEvents = this.clearUnreadEvents.bind(this);
  }

  componentDidMount() {
    const { channel } = this.props;
    channel.on(EVENTS.UNREAD_EVENTS, this.updateUnreadEvents);
    channel.on(EVENTS.OPEN_PANEL, this.clearUnreadEvents);
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
    this.unmounted = true;
    const { channel } = this.props;
    channel.removeListener(EVENTS.UNREAD_EVENTS, this.updateUnreadEvents);
    channel.removeListener(EVENTS.OPEN_PANEL, this.clearUnreadEvents);
  }

  render() {
    return this.props.render(this.state);
  }
}
