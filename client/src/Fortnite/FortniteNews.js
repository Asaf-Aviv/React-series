import React, { Component } from 'react'
import Container from '../components/Container/Container'
import PropTypes from 'prop-types'
import moment from 'moment'
import axios from 'axios'

import qs from 'querystring'

const PatchNotesCard = ({ blog }) => (
  <div className="patch-notes-card gradient-bg green-border">
    <h1>{blog.title}</h1>
    <img src={blog.image} alt=""/>
    <h2 className="date">{moment(blog.date).format('ll')}</h2>
    <div dangerouslySetInnerHTML={{ __html: blog.short }} />
  </div>
)

const NewsCard = ({ news }) => (
  <div className="news-card gradient-bg green-border">
    <h3>{news.title}</h3>
    <img src={news.image} alt="" />
    <h4>{moment.unix(news.time).format('ll')}</h4>
    <p>{news.body}</p>
  </div>
)
const getPatchNotes = () => axios.post('patchnotes/get')

const getStwNews = (language = 'en') => axios.post('stw_motd/get', qs.stringify({ language }))

const FortniteNews = ({ brNews, blogList }) => (
  <Container>
    <div className="fortnite-news">
      <main className="main-news">
        {brNews.map(news => 
          <NewsCard key={news.title} news={news} />
        )}
      </main>
      <aside className="patch-notes">
        {blogList.map(blog => 
          <PatchNotesCard key={blog._id} blog={blog} />
        )}
      </aside>
    </div>
  </Container>
)

FortniteNews.propTypes = {
  brNews: PropTypes.array.isRequired,
  blogList: PropTypes.array.isRequired
}

export default FortniteNews
