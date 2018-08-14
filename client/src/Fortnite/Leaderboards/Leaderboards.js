import React, { Fragment } from 'react'
import Container from '../../components/Container/Container'
import TableHead from  './TableHead/TableHead'
import TableRow from './TableRow/TableRow'
import Loader from '../../components/Loader/Loader'

const Leaderboards = props => (
  <Container>
    <div className="top-10">
      <div className="top-10-wins">
        {props.loadingWins && <Loader />}
        {props.top10Wins.length > 0 && 
          <Fragment>
            <TableHead wins />
            {props.top10Wins.map(player => 
              <TableRow key={player.uid} {...player} winsRow />
            )}
          </Fragment>
        }
      </div>
      <div className="top-10-kills">
        {props.loadingKills && <Loader />}
        {props.top10Kills.length > 0 &&
          <Fragment>
            <TableHead />
            {props.top10Kills.map(player => 
              <TableRow key={player.uid} {...player}/>
            )}
          </Fragment>
        }
      </div>
    </div>
  </Container>
)

// const WinsRow = props => (
//   <a className="player-row" href={`/fortnite/player/${props.username}`}>
//     <h3 className="rank">{props.rank}</h3>
//     <i className={platformIcons[props.platform]} />
//     <p className="username">{props.username}</p>
//     <p className="wins">{props.wins}</p>
//     <p className="matches">{props.matches}</p>
//   </a>
// )

// const KillsRow = props => (
//   <a className="player-row" href={`/fortnite/player/${props.username}`}>
//     <h3 className="rank">{props.rank}</h3>
//     <i className={platformIcons[props.platform]} />
//     <p className="username">{props.username}</p>
//     <p className="kills">{props.kills}</p>
//     <p className="kd">{props.kd}</p>
//   </a>
// )

export default Leaderboards
