import React, { Component } from 'react';
import SearchResults from './SearchResults/SearchResults';
import Loader from '../Loader/Loader';
import axios from 'axios';
import { twitchHeaders } from '../../utils/utils';
import debounce from 'lodash.debounce';

import './TwitchSearchBar.css';

class TwitchSearchBar extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: '',
      isLoading: false,
      users: []
    };

    this.searchUser = debounce(this.searchUser, 200, { 'leading': true });
  }
  
  searchUser = username => {
    this.setState({ isLoading: true, usernameInput: username });

    axios(`https://api.twitch.tv/helix/users?login=${username}`, twitchHeaders)
      .then(res => {
        this.setState({ users: res.data.data, isLoading: false });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({ usernameInput: e.target.value });
    if (e.target.value) this.searchUser(e.target.value);
  };

  openChannel = channelName => {
    this.props.selectStream(channelName);
    this.setState({ usernameInput: '' });
  };

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.openChannel(this.state.usernameInput);
    }
  };

  render() {
    return (
      <div className="searchbar-wrapper">
        <div className="searchbar">
          <div className="results-wrapper">
            <input type="text" 
              onChange={this.handleInputChange}
              onKeyDown={this.handleKeyPress}
              value={this.state.usernameInput} 
              placeholder="Search"
            />
            <div className="searchbar-results">
              { this.state.isLoading && <Loader /> }
              { this.state.usernameInput && !this.state.isLoading && <SearchResults selectStream={this.openChannel} users={this.state.users} /> }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TwitchSearchBar;
