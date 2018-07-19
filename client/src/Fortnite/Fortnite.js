import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';

axios.defaults.baseURL = 'https://fortnite-public-api.theapinetwork.com/prod09/';
axios.defaults.headers.common['Authorization'] = ''
class Fortnite extends Component {
  componentDidMount = () => {
    this.getPVEInfo()
      .then(res => console.log(res))

  }

  getUser = username => axios.post('users/id', qs.stringify({ username: 'ninja' }))

  getUserStats = ({ uid, platforms }, window = 'alltime') => 
    axios.post('users/public/br_stats', qs.stringify({ user_id: uid, platform: platforms[0], window }))
  
  getStore = () => axios.post('store/get', qs.stringify({ language: 'en' }))
  
  getUpcomingItems = () => axios.post('upcoming/get', qs.stringify({ language: 'en' }))

  getStdNews = (language = 'en') => axios.post('stw_motd/get', qs.stringify({ language }))
  
  getBrNews = (language = 'en') => axios.post('br_motd/get', qs.stringify({ language }))
  
  getBrChallenges = (season = 'season4' ) => axios.post('challenges/get', qs.stringify({ season, language: 'en' }))

  getLeaderboards = (platform, gameMode, window) => axios.post('challenges/get', qs.stringify({ platform, gameMode, window: 'top_1_wins' }))
  
  getTop10KillsPlayers = () => axios.post('challenges/get', qs.stringify({ window: 'top_10_kills', language: 'en' }))
  
  getPatchNots = () => axios.post('patchnotes/get')

  getPVEInfo = () => axios.post('pveinfo/get')

  render() {
    return (
      <div>
        HELLO
      </div>
    );
  }
}

export default Fortnite;
