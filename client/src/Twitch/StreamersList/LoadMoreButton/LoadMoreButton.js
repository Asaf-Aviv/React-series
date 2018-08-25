import React from 'react';

const LoadMoreButton = ({ loadMore, loadMorePagination}) => (
  <button className="load-more-btn" onClick={() => loadMore(loadMorePagination)}>Load More</button>
);

export default LoadMoreButton;
