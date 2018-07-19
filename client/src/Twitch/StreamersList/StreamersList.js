import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import UserLogo from '../UserLogo/UserLogo';

import './StreamersList.css';

class StreamersList extends Component {
  render() {
    const channelsDetails = this.props.channelsDetails;

    return (
      <div id="streamers-side-bar">
        { this.props.isLoading && <Loader /> }
        <ul>
          {channelsDetails.map((channel, i) =>
            <li key={channel._id} title={channel.channel.status} onClick={() => this.props.selectStream(channel.channel.name)}>
              <div className="streamer-wrapper">
                <i className="fas fa-circle" />
                <UserLogo logoSrc={channel.channel.logo} displayName={channel.channel.display_name}
                />
                <div className="info">
                  <div className="name">{channel.channel.display_name}</div>
                  <div className="game">Streaming {channel.game} for {channel.viewers} viewers</div>
                </div>
              </div>
            </li>
          )}
        </ul>
        {
          this.props.loadMorePagination &&
            <button className="load-more-btn" onClick={() => this.props.loadMore(this.props.loadMorePagination)}>Load More</button>
        }
      </div>
    );
  }
}

export default StreamersList;
