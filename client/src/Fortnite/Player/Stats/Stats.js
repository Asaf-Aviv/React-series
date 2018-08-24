import React from 'react';

const Stats = props => (
  <div className="stats">
    <h2>Stats</h2>

    <div className="kda gradient-bg">
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

    <div className="kills gradient-bg">
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

    <div className="matches gradient-bg">
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

    <div className="wins gradient-bg">
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

    <div className="winrate gradient-bg">
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

    <div className="score gradient-bg">
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
);

export default Stats;
