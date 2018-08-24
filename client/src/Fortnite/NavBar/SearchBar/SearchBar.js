import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

class FortniteSearchBar extends Component {
  state = {
    playerName: ''
  };

  handleChange = e => (
    this.setState({ playerName: e.target.value })
  );

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/fortnite/player/${this.state.playerName}`);
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            onChange={this.handleChange}
            value={this.state.playerName}
            placeholder="Search Player" />
          <button>
            <Icon>search</Icon>
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(FortniteSearchBar);
