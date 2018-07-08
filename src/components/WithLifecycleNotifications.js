import React from "react";
import Events from "../events";

export class WithLifecycleNotifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = { amountUnreadEvents: 0 };
    this.updateUnreadEvents = this.updateUnreadEvents.bind(this);
  }

  componentDidMount() {
    const { channel, api } = this.props;
    channel.on(Events.UNREAD_EVENTS, this.updateUnreadEvents);
  }

  updateUnreadEvents(amountUnreadEvents) {
    this.setState(previousState => ({
      amountUnreadEvents: previousState.amountUnreadEvents + amountUnreadEvents
    }));
  }

  componentWillUnmount() {
    this.unmounted = true;
    const { channel } = this.props;
    channel.removeListener(Events.UNREAD_EVENTS, this.updateUnreadEvents);
  }

  render() {
    return this.props.render(this.state);
  }
}
