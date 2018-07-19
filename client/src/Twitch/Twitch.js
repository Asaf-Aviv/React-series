import React, { Component } from 'react';
import StreamersList from './StreamersList/StreamersList';
import SearchController from './SearchController/SearchController';
import TwitchSearchBar from './TwitchSearchBar/TwitchSearchBar';
import TwitchPlayer from './TwitchPlayer/TwitchPlayer';
import axios from 'axios';
import { twitchHeaders } from '../util/util';

import './Twitch.css';

class Twitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingList: false,
      selectedGame: null,
      loadMoreStreamersQuery: null,
      streamersList: [],
      channelsDetails: [],
      selectedStream: ''
    };
  }
  
  componentDidMount() {
    const nav = document.querySelector('.nav-wrapper');
    const navLinks = document.getElementsByTagName('a');
    nav.style.boxShadow = 'none';
    nav.style.backgroundColor = '#412852';
    [...navLinks].map(link => link.style.color = '#ff008d');
  }

  selectStream = channelName => {
    if (!this.state.selectedStream || channelName !== this.state.selectedStream) {
      this.setState({selectedStream: channelName})
    }
  }

  updateGame = game => {
    if (!this.state.selectedGame || game._id !== this.state.selectedGame._id ) {
      this.setState({ selectedGame: game }, () => {
        this.updateStreamersList(this.state.selectedGame._id);
      });
    }
  }

  fetchChannels = streamersList => {
    const queryString = streamersList.map(s => s.user_id).join(',')

    return axios(`https://api.twitch.tv/kraken/streams/?channel=${queryString}`, {...twitchHeaders})
      .then(res => res.data.streams)
  }

  getStreamersList = (gameId, pagination=null) => {
    const paginationQuery = pagination ? `&after=${pagination}` : '';

    return axios(`https://api.twitch.tv/helix/streams?game_id=${gameId}${paginationQuery}`, {...twitchHeaders})
      .then(res => res)
  }

  updateStreamersList = gameId => {
    this.setState({ loadingList: true })
    console.log('updating list')

    this.getStreamersList(gameId)
      .then(res => {
        const streamersList = res.data.data;
        const loadMoreStreamersQuery = res.data.pagination.cursor;

        this.fetchChannels(streamersList)
          .then(channelsDetails => {
            this.setState({ 
              streamersList,
              loadMoreStreamersQuery,
              channelsDetails,
              loadingList: false 
            });
          });
      });
  }

  loadMoreStreamers = pagination => {
    this.setState({ loadingList: true })
    const gameId = this.state.selectedGame._id

    this.getStreamersList(gameId, pagination)
      .then(res => {
        const loadedStreamersList = res.data.data;
        const loadMoreStreamersQuery = res.data.pagination.cursor
        this.fetchChannels(loadedStreamersList)
          .then(loadedChannelsDetails => {
            this.setState(prevState => ({
              streamersList: [...prevState.streamersList, ...loadedStreamersList],
              loadMoreStreamersQuery,
              channelsDetails: [...prevState.channelsDetails, ...loadedChannelsDetails],
              loadingList: false 
            }));
          });
      })
  }

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
          <TwitchSearchBar selectStream={this.selectStream}/>
          <TwitchPlayer selectedStream={this.state.selectedStream}/>
          <SearchController 
            selectedGame={this.state.selectedGame} 
            updateGame={this.updateGame} 
          />
        </div>
      </div>
    );
  }
} 

export default Twitch;
