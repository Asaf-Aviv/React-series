import React from 'react'
import PropTypes from 'prop-types'

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

Totals.propTypes = {
  wins: PropTypes.number.isRequired,
  matchesplayed: PropTypes.number.isRequired,
  winrate: PropTypes.number.isRequired,
  kills: PropTypes.number.isRequired,
  kd: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
}

export default Totals
