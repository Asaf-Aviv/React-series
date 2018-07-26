import React, { Component } from 'react';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

import './NavigationBar.css';

class NavigationBar extends Component {
  constructor() {
    super();

    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render() {
    return (
      <nav className="nav-wrapper">
        <Container>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/website">Website</NavLink></li>
            <li><NavLink to="/twitch">Twitch</NavLink></li>
            <li><NavLink to="/todos">Todos</NavLink></li>
            <li><NavLink to="/reduxulator">Reduxulator</NavLink></li>
            <li><NavLink to="/fortnite">Fortnite</NavLink></li>
          </ul>
        </Container>
      </nav>
    );
  }
}

export default NavigationBar;
