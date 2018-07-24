import React, { Component } from 'react';
import Container from '../components/Container/Container';
import axios from 'axios';
import qs from 'querystring';

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
      <h3>Total: {props.total}</h3>
    </div>
  </div>
);

class Challenges extends Component {
  componentDidMount = () => {
    this.getChallenges()
      .then(
        ({ data }) => {
          this.setState({
            challenges: Object.keys(data.challenges).map(week => data.challenges[week])
          })
          console.log(data)
        }
      )
  }

  getChallenges = () => (
    axios.post('challenges/get', qs.stringify({ season: 'season4', language: 'en' }))
  );
  
  state = {
    challenges: []
  };

  render() {
    const { challenges } = this.state
    return (
      <div id="fortnite-challenges">
        <Container>
          {challenges.map(week => week.map(challenge => <ChallengeCard key={challenge.challenge} {...challenge} />))}
        </Container>
      </div>
    );
  }
}

export default Challenges;
