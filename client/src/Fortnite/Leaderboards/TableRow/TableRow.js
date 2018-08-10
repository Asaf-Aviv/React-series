import React from 'react'
import PropTypes from 'prop-types'
import platformIcons from '../../platformIcons'

const TableRow = ({ winsRow }, props) => (
  <a className="player-row" href={`/fortnite/player/${props.username}`}>
    <h3 className="rank">{props.rank}</h3>
    <i className={platformIcons[props.platform]} />
    <p className="username">{props.username}</p>
    <p className={winsRow ? "wins" : "kills"}>{winsRow ? props.wins : props.kills}</p>
    <p className={winsRow ? "matches" : "kd"}>{winsRow ? props.matches : props.kd}</p>
  </a>
)

TableRow.propTypes = {
  winsRow: PropTypes.bool,
  username: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  wins: PropTypes.string,
  kills: PropTypes.string,
  matches: PropTypes.string,
  kd: PropTypes.string
}

export default TableRow
