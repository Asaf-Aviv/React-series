import React from 'react';
import Container from '../../components/Container/Container';
import NewsCard from './NewsCard/NewsCard';
import PropTypes from 'prop-types';

const FortniteNews = ({ brNews }) => (
  <Container>
    <div className="fortnite-news">
      <main className="main-news">
        {brNews.map(news => 
          <NewsCard key={news.title} news={news} />
        )}
      </main>
    </div>
  </Container>
);

FortniteNews.propTypes = {
  brNews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FortniteNews;
