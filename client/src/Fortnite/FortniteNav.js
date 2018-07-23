import React from 'react';
import Icon from '@material-ui/core/Icon';
import Container from '../components/Container/Container';
import { NavLink } from 'react-router-dom';

const FortniteSearchBar = () => (
  <div className="search-bar">
    <input type="text" placeholder="Search Player"/>
    <button>
      <Icon>search</Icon>
    </button>
  </div>
);

const FortniteNav = () => (
  <nav id="fortnite-nav">
    <Container>
      <ul>
        <li><NavLink exact to="/fortnite/">Home</NavLink></li>
        <li><NavLink to="/fortnite/leaderboards">Leaderboards</NavLink></li>
        <li><NavLink to="/fortnite/challenges">Challenges</NavLink></li>
        <li><NavLink to="/fortnite/store">Store</NavLink></li>
        <FortniteSearchBar />
      </ul>
    </Container>
  </nav>
);

export default FortniteNav;
