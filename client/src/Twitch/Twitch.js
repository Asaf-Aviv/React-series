import React, { Component } from 'react';
import StreamersList from './StreamersList/StreamersList';
import GameController from './GameController/GameController';
import TwitchSearchBar from './TwitchSearchBar/TwitchSearchBar';
import TwitchPlayer from './TwitchPlayer/TwitchPlayer';
import axios from 'axios';
import { twitchHeaders, uniqueFrom } from '../utils/utils';

import './Twitch.css';

const colorNav = () => {
  const nav = document.querySelector('.nav-wrapper');
  nav.style.boxShadow = 'none';
  nav.style.backgroundColor = '#412852';
  document.querySelectorAll('.nav-wrapper a').forEach(link => link.style.color = '#00ffe7');
  document.querySelector('.drawer-container ul').style.backgroundColor = '#412852';
};

class Twitch extends Component {
  state = {
    streamersList: [],
    channelsDetails: [],
    loadingList: false,
    selectedGame: null,
    loadMoreStreamersQuery: null,
    selectedStream: null
  };

  componentDidMount = () => colorNav();
  
  selectGame = game => {
    if (!this.state.selectedGame || game._id !== this.state.selectedGame._id) {
      this.setState({ selectedGame: game }, () => {
        this.updateStreamersList(this.state.selectedGame._id);
        document.querySelector('#streamers-side-bar > ul').scrollTop = 0;
      });
    }
  };
  
  getChannels = async streamersList => {
    const queryString = streamersList.map(s => s.user_id).join(',');
    
    const { data } = await axios(`https://api.twitch.tv/kraken/streams/?channel=${queryString}`, twitchHeaders);
    return data.streams;
  };
  
  getStreamersList = async (gameId, pagination = '') => {
    const paginationQuery = pagination ? `&after=${pagination}` : '';
    
    const { data } = await axios(`https://api.twitch.tv/helix/streams?game_id=${gameId}${paginationQuery}`, twitchHeaders);
    const { data:streamersList } = data;
    const loadMoreStreamersQuery = data.pagination.cursor;
    
    return [streamersList, loadMoreStreamersQuery];
  };
  
  updateStreamersList = async gameId => {
    try {
      this.setState({ loadingList: true });
      
      const [streamersList, loadMoreStreamersQuery] = await this.getStreamersList(gameId);
      const channelsDetails = await this.getChannels(streamersList);
      
      this.setState({
        streamersList,
        loadMoreStreamersQuery,
        channelsDetails,
        loadingList: false
      });
    } catch(err) {
      this.stopLoading();
    }
  };
  
  loadMoreStreamers = async pagination => {
    try {
      this.setState({ loadingList: true })
      const gameId = this.state.selectedGame._id
      
      const [loadedStreamersList, loadMoreStreamersQuery] = await this.getStreamersList(gameId, pagination);
      const loadedChannelsDetails = await this.getChannels(loadedStreamersList);
      
      this.setState(prevState => ({
        streamersList: uniqueFrom([...prevState.streamersList, ...loadedStreamersList], 'user_id', 'left'),
        channelsDetails: uniqueFrom([...prevState.channelsDetails, ...loadedChannelsDetails],'_id', 'right'),
        loadMoreStreamersQuery,
        loadingList: false
      }));
    } catch (err) {
      this.stopLoading();
    }
  };
  
  selectStream = channelName => {
    if (!this.state.selectedStream || this.state.selectedStream !== channelName) {
      this.setState({ selectedStream: channelName });
      this.embedPlayer(channelName);
    }
  };
  
  embedPlayer = channelName => {
    this.removePlayer();

    new window.Twitch.Embed('twitch-player', {
      channel: channelName,
      width: '100%',
      height: '100%',
      theme: 'dark'
    });
  };
  
  
  closeStream = () => {
    this.setState({ selectedStream: null });
    this.removePlayer();
  };
  
  removePlayer = () => {
    const twitchPlayer = document.querySelector('#twitch-player iframe');
    
    if (twitchPlayer) {
      twitchPlayer.parentNode.removeChild(twitchPlayer);
    }
  };
  stopLoading = () => this.setState({ loadingList: false});
  
  render() {
    return (
      <div id="twitch-wrapper" className="d-flex">
        <StreamersList
          streamersList={this.state.streamersList}
          loadMorePagination={this.state.loadMoreStreamersQuery}
          channelsDetails={this.state.channelsDetails}
          loadMore={this.loadMoreStreamers}
          isLoading={this.state.loadingList}
          selectStream={this.selectStream}
          />
        <div id="main-column-wrapper">
          <TwitchSearchBar selectStream={this.selectStream} />
          <TwitchPlayer
            selectedStream={this.state.selectedStream}
            closeStream={this.closeStream}
            />
          <GameController
            selectedGame={this.state.selectedGame}
            selectGame={this.selectGame}
            />
        </div>
      </div>
    );
  }
}

export default Twitch;
