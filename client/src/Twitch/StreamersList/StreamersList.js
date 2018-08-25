import React from 'react';
import StreamerCard from './StreamerCard/StreamerCard';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';
import Loader from '../Loader/Loader';

import './StreamersList.css';

const StreamersList = props => (
  <div id="streamers-side-bar">
    { props.isLoading && <Loader /> }
    <ul>
      {props.channelsDetails.map((channel, i) =>
        <StreamerCard
          key={channel._id}
          channel={channel}
          selectStream={props.selectStream}
        />
      )}
    </ul>
    {props.loadMorePagination &&
      <LoadMoreButton
        loadMore={props.loadMore}
        loadMorePagination={props.loadMorePagination}
      />
    }
  </div>
);

export default StreamersList;
