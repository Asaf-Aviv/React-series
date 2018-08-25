import React, { Component } from 'react';

import './TwitchPlayer.css';

class TwitchPlayer extends Component {

  render() {
    return <div id="twitch-player"><button onClick={this.props.closeStream}></button></div>;
  }
}
  
export default TwitchPlayer;
