import React, { Component } from 'react';
import Container from '../components/Container/Container';
import FortniteNav from './FortniteNav';
import Leaderboards from './Leaderboards';
import Challenges from './Challenges';
import Store from './Store';
import FortniteNews from './FortniteNews';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import qs from 'querystring';

import './Fortnite.css';

axios.defaults.baseURL = 'https://fortnite-public-api.theapinetwork.com/prod09/';
axios.defaults.headers.common['Authorization'] = 'e4ad44f24fc0ce4834dbdf6d3e8452e4'

class Fortnite extends Component {
  componentDidMount = () => {
    document.querySelector('.nav-wrapper').style.display = 'none';
  }

  componentWillUnmount = () => {
    document.querySelector('.nav-wrapper').style.display = 'block';
  }

  getUser = username => axios.post('users/id', qs.stringify({ username: 'ninja' }))

  getUserStats = ({ uid, platforms }, window = 'alltime') => 
    axios.post('users/public/br_stats', qs.stringify({ user_id: uid, platform: platforms[0], window }))
  
  getUpcomingItems = () => axios.post('upcoming/get', qs.stringify({ language: 'en' }))
  
  getBrChallenges = (season = 'season4' ) => axios.post('challenges/get', qs.stringify({ season, language: 'en' }))

  
  getTop10KillsPlayers = () => axios.post('challenges/get', qs.stringify({ window: 'top_10_kills', language: 'en' }))

  render() {
    const { match } = this.props
    return (
      <div id="fortnite-app">
        <FortniteNav />
          <Container>
            <Switch>
              <Route exact path={`${match.url}/`} component={FortniteNews} />
              <Route exact path={`${match.url}/player/:playerName`} render={() => <div>Player</div>} />
              <Route exact path={`${match.url}/leaderboards`} component={Leaderboards} />
              <Route exact path={`${match.url}/challenges`} component={Challenges} />
              <Route exact path={`${match.url}/store`} component={Store} />
              <Route render={() => <div>404 Page Not Found</div>  } />
            </Switch>
          </Container>
      </div>
    );
  }
}

export default Fortnite;
