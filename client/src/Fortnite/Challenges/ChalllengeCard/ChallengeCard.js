import React from 'react'
import PropTypes from 'prop-types'

const starSrc = 'https://fortnite-public-files.theapinetwork.com/fortnite-br-challenges-star.png'

const ChallengeCard = props => (
  <div className="challenge-card">
    <div className="stars">
      <img src={starSrc} alt="Star" />
      <span>{props.stars}</span>
    </div>
    <div className="challenge-info">
      <h2>{props.challenge}</h2>
      <h3>Difficult:
        <span className={props.difficulty}> {props.difficulty}</span>
      </h3>
      <h3>0 / {props.total}</h3>
    </div>
  </div>
)

ChallengeCard.propTypes = {
  stars: PropTypes.string.isRequired,
  challenge: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired
}

export default ChallengeCard
