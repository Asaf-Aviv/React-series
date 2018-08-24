import React, { Component } from 'react';
import Container from '../../components/Container/Container';
import Hamburger from '../../components/NavigationBar/Hamburger/Hamburger';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import backIcon from '../../icons/backIcon.svg';

const colorNav = () => {
  document.querySelectorAll('#fortnite-app .nav-wrapper a').forEach(link => link.style.color = '#2fdce8');
  document.querySelector('#fortnite-app .drawer-container > ul').style.backgroundColor = '#2e1c59';
}

class FortniteNav extends Component {
  state = {
    isOpen: false
  };

  componentDidMount = () => {
    colorNav();
  };

  openNav = () => this.setState({ isOpen: true });
  
  closeDrawer = () => this.setState({ isOpen: false });

  handleClick = () => this.setState({ isOpen: false });

  render() {
    return (
      <nav id="fortnite-nav">
        <Container>
          <Hamburger handleClick={this.openNav} />
          <div className={`${this.state.isOpen ? "active" : ""} drawer-container`}>
            <ul>
              <li><NavLink exact to="/fortnite/">Home</NavLink></li>
              <li><NavLink to="/fortnite/leaderboards">Leaderboards</NavLink></li>
              <li><NavLink to="/fortnite/challenges">Challenges</NavLink></li>
              <li><NavLink to="/fortnite/store">Store</NavLink></li>
              <li className="back"><NavLink exact to="/"><img src={backIcon} alt="back" title="Go back"/></NavLink></li>
            </ul>
            <div className="close-drawer" onClick={this.closeDrawer}></div>
          </div>
          <SearchBar />
        </Container>
      </nav>
    );
  }
}

export default FortniteNav;
