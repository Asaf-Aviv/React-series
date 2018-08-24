import React from 'react';
import PropTypes from 'prop-types';
import { unix } from 'moment';

const NewsCard = ({ news }) => (
  <div className="news-card gradient-bg green-border">
    <h3>{news.title}</h3>
    <img src={news.image} alt="" />
    <h4>{unix(news.time).format('ll')}</h4>
    <p>{news.body}</p>
  </div>
);

NewsCard.propTypes = {
  news: PropTypes.shape({
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  })
}

export default NewsCard;
