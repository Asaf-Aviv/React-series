import React, { Component } from 'react'
import Container from '../components/Container/Container'
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

const Challenges = ({ challenges })  => (
  <div id="fortnite-challenges">
    <Container>
      {challenges.map(week => week.map(challenge => 
        <ChallengeCard key={challenge.challenge} {...challenge} />
      ))}
    </Container>
  </div>
)

Challenges.propTypes = {
  challenges: PropTypes.array.isRequired
}

export default Challenges
