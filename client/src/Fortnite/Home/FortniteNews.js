import React from 'react'
import Container from '../../components/Container/Container'
import PropTypes from 'prop-types'
import { unix } from 'moment'

const NewsCard = ({ news }) => (
  <div className="news-card gradient-bg green-border">
    <h3>{news.title}</h3>
    <img src={news.image} alt="" />
    <h4>{unix(news.time).format('ll')}</h4>
    <p>{news.body}</p>
  </div>
)

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
)

FortniteNews.propTypes = {
  brNews: PropTypes.array.isRequired,
}

export default FortniteNews
