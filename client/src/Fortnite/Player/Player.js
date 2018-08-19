import React, { Component, Fragment } from 'react'
import Totals from './Totals/Totals'
import Stats from './Stats/Stats'
import Container from '../../components/Container/Container'
import platformIcons from '../platformIcons'

class PlayerRecap extends Component {
  componentDidMount = () => {
    const playerName = this.props.match.params.playerName
    this.props.fetchPlayer(playerName)
  }

  UNSAFE_componentWillReceiveProps = nextProps => {
    const playerName = nextProps.match.params.playerName

    if (playerName !== this.props.match.params.playerName) {
      this.props.fetchPlayer(playerName)
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
            <div className="title gradient-bg">
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
