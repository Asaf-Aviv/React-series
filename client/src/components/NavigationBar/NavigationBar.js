import React, { Component } from 'react';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

import './NavigationBar.css';

class NavigationBar extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  openNav = () => this.setState({ isOpen: true });
  
  closeDrawer = () => this.setState({ isOpen: false });

  handleClick = () => this.setState({ isOpen: false });

  render() {
    return (
      <nav className="nav-wrapper">
        <Container>
          <div className="hamburger" onClick={this.openNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${this.state.isOpen ? "active" : ""} drawer-container`}>
            <ul>
              <li><NavLink onClick={this.handleClick} exact to="/">Home</NavLink></li>
              <li><NavLink onClick={this.handleClick} to="/twitch">Twitch</NavLink></li>
              <li><NavLink onClick={this.handleClick} to="/todos">Todos</NavLink></li>
              <li><NavLink onClick={this.handleClick} to="/fortnite">Fortnite</NavLink></li>
            </ul>
            <div className="close-drawer" onClick={this.closeDrawer}></div>
          </div>
        </Container>
      </nav>
    );
  }
}

export default NavigationBar;
