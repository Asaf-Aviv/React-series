import React, { Component, Fragment } from 'react'
import Container from '../components/Container/Container'
import axios from 'axios'
import qs from 'querystring'
import Loader from '../components/Loader/Loader'
import platformIcons from './platformIcons'

class Leaderboards extends Component {
  constructor() {
    super()

    this.state = {
      top10Wins: [],
      top10Kills: [],
      loadingWins: false,
      loadingKills: false
    }
  }

  componentDidMount = () => {
    this.setState({ loadingWins: true, loadingKills: true })

    this.getTop10('wins')
      .then(res => this.setState({ top10Wins: res.data.entries, loadingWins: false }))

    this.getTop10('kills')
      .then(res => this.setState({ top10Kills: res.data.entries, loadingKills: false }))
  }

  getTop10 = category => (
    axios.post('leaderboards/get', qs.stringify({ window: `top_10_${category}` }))
  )

  render() {
    return (
      <Container>
        <div className="top-10">
          <div className="top-10-wins">
            {/* { this.state.loadingWins && <Loader /> } */}
            {
              this.props.top10Wins.length > 0 && 
              <Fragment>
                <h3 className="title">Top 10 Wins</h3>
                <div className="head">
                  <span>#</span>
                  <span></span>
                  <span>Username</span>
                  <span>Wins</span>
                  <span>Matches</span>
                </div>
                {this.props.top10Wins.map(player => 
                  <WinsRow key={player.uid} {...player}/>
                )}
              </Fragment>
            }
          </div>
          <div className="top-10-kills">
            {/* { this.state.loadingKills && <Loader /> } */}
            {
              this.props.top10Kills.length > 0 &&
              <Fragment>
                <h3 className="title">Top 10 Kills</h3>
                <div className="head">
                  <span>#</span>
                  <span></span>
                  <span>Username</span>
                  <span>Kills</span>
                  <span>K / D</span>
                </div>
                {this.props.top10Kills.map(player => 
                  <KillsRow key={player.uid} {...player}/>
                )}
              </Fragment>
            }
          </div>
        </div>
      </Container>
    )
  }
}

const WinsRow = props => (
  <a className="player-row" href={`/fortnite/player/${props.username}`}>
    <h3 className="rank">{props.rank}</h3>
    <i className={platformIcons[props.platform]} />
    <p className="username">{props.username}</p>
    <p className="wins">{props.wins}</p>
    <p className="matches">{props.matches}</p>
  </a>
)

const KillsRow = props => (
  <a className="player-row" href={`/fortnite/player/${props.username}`}>
    <h3 className="rank">{props.rank}</h3>
    <i className={platformIcons[props.platform]} />
    <p className="username">{props.username}</p>
    <p className="kills">{props.kills}</p>
    <p className="kd">{props.kd}</p>
  </a>
)

export default Leaderboards
