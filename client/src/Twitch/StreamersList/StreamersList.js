import React from 'react';
import Loader from '../Loader/Loader';
import UserLogo from '../UserLogo/UserLogo';

import './StreamersList.css';

const StreamersList = props => (
  <div id="streamers-side-bar">
    { props.isLoading && <Loader /> }
    <ul>
      {props.channelsDetails.map((channel, i) =>
        <li key={channel._id} title={channel.channel.status} onClick={() => props.selectStream(channel.channel.name)}>
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
      props.loadMorePagination &&
        <button className="load-more-btn" onClick={() => props.loadMore(props.loadMorePagination)}>Load More</button>
    }
  </div>
);

export default StreamersList;
