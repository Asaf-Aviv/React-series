import React, { Component } from 'react';

import './TwitchPlayer.css';

class TwitchPlayer extends Component {
  shouldComponentUpdate(channelName) {
    if (channelName.selectedStream && channelName.selectedStream !== this.props.selectedStream) {
      window.embedPlayer(channelName.selectedStream);
      return true;
    }
    return false;
  }

  render() {
    return <div id="twitch-player"></div>;
  }
}
  
export default TwitchPlayer;
