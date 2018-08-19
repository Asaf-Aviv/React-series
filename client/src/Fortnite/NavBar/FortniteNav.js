import React from 'react';
import Container from '../../components/Container/Container';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import backIcon from '../../icons/backIcon.svg';

const FortniteNav = () => (
  <nav id="fortnite-nav">
    <Container>
      <ul>
        <li><NavLink exact to="/fortnite/">Home</NavLink></li>
        <li><NavLink to="/fortnite/leaderboards">Leaderboards</NavLink></li>
        <li><NavLink to="/fortnite/challenges">Challenges</NavLink></li>
        <li><NavLink to="/fortnite/store">Store</NavLink></li>
        <SearchBar />
        <li className="back"><NavLink exact to="/"><img src={backIcon} alt="back" title="Go back"/></NavLink></li>
      </ul>
    </Container>
  </nav>
);

export default FortniteNav;
