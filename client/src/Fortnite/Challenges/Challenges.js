import React from 'react';
import ChallengeCard from './ChalllengeCard/ChallengeCard';
import Container from '../../components/Container/Container';
import PropTypes from 'prop-types';

const Challenges = ({ challenges }) => (
  <div id="fortnite-challenges">
    <Container>
      {challenges.map(week => week.map(challenge =>
        <ChallengeCard key={challenge.challenge} {...challenge} />
      ))}
    </Container>
  </div>
);

Challenges.propTypes = {
  challenges: PropTypes.array.isRequired
};

export default Challenges;
