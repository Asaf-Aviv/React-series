import React, { Component } from 'react'
import FortniteNav from './FortniteNav'
import Leaderboards from './Leaderboards/Leaderboards'
import Challenges from './Challenges/Challenges'
import Store from './Store'
import PlayerRecap from './Player'
import FortniteNews from './FortniteNews'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'

import './Fortnite.css'

class Fortnite extends Component {
  state = {
    blogList: [],
    brNews: [],
    stwNews: [],
    top10Wins: [],
    top10Kills: [],
    store: [],
    upcomingItems: [],
    challenges: [],
    playerData: {},
    searchError: false,
    loadingWins: false,
    loadingKills: false
  }

  componentDidMount = () => {
    document.querySelector('.nav-wrapper').style.display = 'none'
    this.fetcher('news', 'brNews')
    this.fetcher('patchNotes', 'blogList')
    this.fetcher('leaderboards', 'top10Wins', { window: 'top_10_wins' })
    this.fetcher('leaderboards', 'top10Kills', { window: 'top_10_kills' })
    this.fetcher('store', 'store')
    this.fetcher('upcoming', 'upcomingItems')
    this.fetcher('challenges', 'challenges')
  }

  componentWillUnmount = () => {
    document.querySelector('.nav-wrapper').style.display = 'block'
  }
  
  stateSetter = (data, stateKey) => (
    this.setState({ [stateKey]: data })
  )

  errorSetter = stateKey => (
    this.setState({ [`${stateKey}Error`]: true })
  )

  loaderSetter = stateKey => (
    this.setState({ [`${stateKey}Loading`]: true })
  )

  fetcher = (route, stateKey, query) => {
    const queryString = query && Object.keys(query).map(key => `${key}=${query[key]}`)
    axios.get(`/api/fortnite/${route}?${queryString || ''}`)
      .then(({ data }) => this.stateSetter(data, stateKey))
      .catch(() => this.errorSetter(stateKey))
  }

  fetchPlayer = async playerName => {
    const { data:playerData } = await axios.get(`/api/fortnite/player/${playerName}`)
    this.setState({ playerData })
  }

  render() {
    const { match } = this.props
    return (
      <div id="fortnite-app">
        <FortniteNav />
          <Switch>
            <Route exact path={`${match.url}/`} render={() => 
              <FortniteNews brNews={this.state.brNews} blogList={this.state.blogList} />
            }/>
            <Route exact path={`${match.url}/leaderboards`} render={() => 
              <Leaderboards top10Wins={this.state.top10Wins} top10Kills={this.state.top10Kills} />
            }/>
            <Route exact path={`${match.url}/challenges`} render={() => 
              <Challenges challenges={this.state.challenges} />
            }/>
            <Route exact path={`${match.url}/store`} render={() => 
              <Store store={this.state.store} upcomingItems={this.state.upcomingItems} />
            }/>
            <Route exact path={`${match.url}/player/:playerName`} render={props => 
              <PlayerRecap fetchPlayer={this.fetchPlayer} playerData={this.state.playerData} {...props} />
            }/>
            <Route render={() => <div>404 Page Not Found</div>} />
          </Switch>
      </div>
    )
  }
}

export default Fortnite
