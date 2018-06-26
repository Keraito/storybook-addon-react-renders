import React from "react";
import Events from "../events";

export class WithLifecycleNotifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = { notifications: false };
    this.toggleNotification = this.toggleNotification.bind(this);
  }

  componentDidMount() {
    const { channel, api } = this.props;
    channel.on(Events.EVENTS, this.toggleNotification);

    this.stopListeningOnStory = api.onStory(() => {
      console.log("?!");
    });
  }

  toggleNotification() {
    this.setState(previousState => ({
      notifications: !previousState.notifications
    }));
  }
  render() {
    return this.props.render(this.state);
  }
}
