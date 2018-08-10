import React, { Component, Fragment } from 'react'
import Container from '../components/Container/Container'
import platformIcons from './platformIcons'
import axios from 'axios'
import qs from 'querystring'

const Totals = props => (
  <div className="totals">
    <h2>Totals</h2>

    <div>
      <h3>Wins</h3>
      <p>{props.wins}</p>
    </div>

    <div>
      <h3>Matches</h3>
      <p>{props.matchesplayed}</p>
    </div>

    <div>
      <h3>Winrate</h3>
      <p>{props.winrate}%</p>
    </div>

    <div>
      <h3>Kills</h3>
      <p>{props.kills}</p>
    </div>

    <div>
      <h3>K / D</h3>
      <p>{props.kd}</p>
    </div>

    <div>
      <h3>Score</h3>
      <p>{props.score}</p>
    </div>

  </div>
)

const Stats = props => (
  <div className="stats">
    <h2>Stats</h2>

    <div className="kda">
      <h3>K / D</h3>
      <div className="kd-solo">
        <h3>Solo</h3>
        <p>{props.kd_solo}</p>
      </div>
      <div className="kd-duo">
        <h3>Duo</h3>
        <p>{props.kd_duo}</p>
      </div>
      <div className="kd-squad">
        <h3>Squad</h3>
        <p>{props.kd_squad}</p>
      </div>
    </div>

    <div className="kills">
      <h3>Kills</h3>
      <div className="kills-solo">
        <h3>Solo</h3>
        <p>{props.kills_solo}</p>
      </div>
      <div className="kills-duo">
        <h3>Duo</h3>
        <p>{props.kills_duo}</p>
      </div>
      <div className="kills-squad">
        <h3>Squad</h3>
        <p>{props.kills_squad}</p>
      </div>
    </div>

    <div className="matches">
      <h3>Matches</h3>
      <div className="matches-solo">
        <h3>Solo</h3>
        <p>{props.matchesplayed_solo}</p>
        </div>
      <div className="matches-duo">
        <h3>Duo</h3>
        <p>{props.matchesplayed_duo}</p>
      </div>
      <div className="matches-squad">
        <h3>Squad</h3>
        <p>{props.matchesplayed_squad}</p>
      </div>
    </div>

    <div className="wins">
      <h3>Wins</h3>
      <div className="wins-solo">
        <h3>Solo</h3>
        <p>{props.placetop1_solo}</p>
      </div>
      <div className="wins-duo">
        <h3>Duo</h3>
        <p>{props.placetop1_duo}</p>
      </div>
      <div className="wins-squad">
        <h3>Squad</h3>
        <p>{props.placetop1_squad}</p>
      </div>
    </div>

    <div className="winrate">
      <h3>Winrate</h3>
      <div className="winrate-solo">
        <h3>Solo</h3>
        <p>{props.winrate_solo}</p>
      </div>
      <div className="winrate-duo">
        <h3>Duo</h3>
        <p>{props.winrate_duo}</p>
      </div>
      <div className="winrate-squad">
        <h3>Squad</h3>
        <p>{props.winrate_squad}</p>
      </div>
    </div>

    <div className="score">
      <h3>Score</h3>
      <div className="score-solo">
        <h3>Solo</h3>
        <p>{props.score_solo}</p>
      </div>
      <div className="score-duo">
        <h3>Duo</h3>
        <p>{props.score_duo}</p>
      </div>
      <div className="score-squad">
        <h3>Squad</h3>
        <p>{props.score_squad}</p>
      </div>
    </div>
  </div>
)

class PlayerRecap extends Component {
  componentDidMount = () => {
    const playerName = this.props.match.params.playerName
    this.props.fetchPlayer(playerName)
  }

  componentWillReceiveProps = nextProps => {
    const playerName = nextProps.match.params.playerName
    this.props.fetchPlayer(playerName)
  }

  findPlayer = async username => {
    this.setState({ isLoading: true, searchError: false })
    const playerDetails = await this.getUser(username)
    if (!playerDetails.data.error) {
      const playerStats = await this.getUserStats(playerDetails.data, 'season5')
      this.setState({ playerData: playerStats.data, isLoading: false })
    } else {
      this.setState({ PlayerData: {}, isLoading: false, searchError: true })
    }
  }

  render() {
    const { playerData } = this.props
    return (
      <div className="player-recap">
        {/* {this.state.searchError && <h1>Player Not Found</h1>} */}
      { 
        Object.keys(playerData).length > 0 &&
          <Fragment>
            <div className="title">
              <h1>{playerData.username}</h1>
              <i className={platformIcons[playerData.platform]}></i>
            </div>
            <Container>
              <Totals {...playerData.totals} />
              <Stats {...playerData.stats} />
            </Container>
          </Fragment>
      }
      </div>
    )
  }
}

export default PlayerRecap
