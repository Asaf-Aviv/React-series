import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import UserLogo from '../UserLogo/UserLogo';
import axios from 'axios';
import { twitchHeaders } from '../../util/util';
import debounce from 'lodash.debounce';

import './TwitchSearchBar.css';

const SearchResults = props => {
  if (props.users.length) {
    return props.users.map(user => {
      return (
        <div className="user-wrapper" onClick={() => props.selectStream(user.display_name)} title={user.description} key={user.id}>
          <UserLogo logoSrc={user.profile_image_url} displayName={user.display_name} />
          <div className="name">{user.display_name}</div>
          <div className="views">
            <i className="far fa-eye" title="Channel Views">
              <span>{user.view_count.toLocaleString()}</span>
            </i>
          </div>
        </div>
    )});
  } else {
    return <div style={{ textAlign: 'center', padding: '1rem' }}>User Not Found</div>;
  }
};

class TwitchSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '',
      isLoading: false,
      users: []
    };

    this.searchUser = debounce(this.searchUser, 200);
  }
  
  searchUser = username => {
    this.setState({ isLoading: true, usernameInput: username })
      axios(`https://api.twitch.tv/helix/users?login=${username}`, { ...twitchHeaders })
      .catch(console.log)
      .then(res => {
        console.log(res.data.data)
        this.setState({ users: res.data.data, isLoading: false });
      });
  };

  handleInputChange = e => {
    this.setState({ usernameInput: e.target.value });
    if (e.target.value) this.searchUser(e.target.value)
  }

  openChannel = channelName => {
    this.props.selectStream(channelName)
    this.setState({ usernameInput: '' });
  }

  render() {
    console.log(this.props)
    return (
      <div className="searchbar-wrapper">
        <div className="searchbar">
          <div className="results-wrapper">
            <input type="text" 
              onChange={this.handleInputChange} 
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
