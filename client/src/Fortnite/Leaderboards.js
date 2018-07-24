import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';

class Leaderboards extends Component {
  componentDidMount = () => {
    this.getLeaderboards('pc', 'solo')
      .then(
        ({ data }) => console.log(data)
      )
  }

  getLeaderboards = (platform, gamemode) => (
    axios.post('leaderboards/get', qs.stringify({ platform, gamemode, window: 'top_1_wins' }))
  );
  
  state = {
    leaderboards: []
  };

  render() {
    return (
      console.log(this.state.leaderboards) ||
      <div></div>
    );
  }
}

export default Leaderboards;
