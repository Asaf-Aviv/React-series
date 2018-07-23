import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import qs from 'querystring';

const PatchNotesCard = ({ blog }) => (
  <div className="patch-notes-card gradient-bg green-border">
    <h1>{blog.title}</h1>
    <img src={blog.image} alt=""/>
    <h2 className="date">{moment(blog.date).format('ll')}</h2>
    <div dangerouslySetInnerHTML={{ __html: blog.short }} />
  </div>
);

const NewsCard = ({ newsList }) => (
  <div className="news-card gradient-bg green-border">
    <h3>{newsList.title}</h3>
    <img src={newsList.image} alt=""/>
    <h4>{moment.unix(newsList.time).format('ll')}</h4>
    <p>{newsList.body}</p>
  </div>
);

class FortniteNews extends Component {
  state = {
    blogList: [],
    news: {
      br: [],
      stw: []
    }
  };

  componentWillMount = () => {
    this.getPatchNotes()
      .then(
        ({ data }) => this.setState({ blogList: data.blogList }))
    this.getBrNews()
      .then(({ data }) => {
        const brNews = data.entries.reduce((uniques, entry) => { 
          if (!uniques.some(obj => obj.title === entry.title)) {
            uniques.push(entry)
          }
          return uniques;
        }, [])
        this.setState({ news: { br: brNews} });
      })
  }
    // this.getStdNews().then(({ data }) => console.log(data))
  
  getPatchNotes = () => axios.post('patchnotes/get')

  getStdNews = (language = 'en') => axios.post('stw_motd/get', qs.stringify({ language }))
  
  getBrNews = (language = 'en') => axios.post('br_motd/get', qs.stringify({ language }))

  render() {
    const blogList = this.state.blogList;
    const brNews = this.state.news.br;
    return (
      console.log(brNews) ||
      <div className="fortnite-news">
        <main className="main-news">
          {brNews.map(newsList => 
            <NewsCard key={newsList.title} newsList={newsList} />
          )}
        </main>
        <aside className="patch-notes">
          {blogList.map(blog => 
            <PatchNotesCard key={blog._id} blog={blog} />
          )}
        </aside>
      </div>
    );
  }
}

export default FortniteNews;
