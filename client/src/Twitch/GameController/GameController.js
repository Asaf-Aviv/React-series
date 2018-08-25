import React, { Component } from 'react';
import SelectedGame from './SelectedGame/SelectedGame';
import GamesMenu from './GamesMenu/GamesMenu';
import axios from 'axios';
import { twitchHeaders } from '../../utils/utils';

import './GameController.css';

class GameController extends Component {
  state = {
    topGames: [],
    menuIsOpen: false
  };

  componentDidMount = () => this.getTopGames();

  getTopGames = () => {
    axios('https://api.twitch.tv/kraken/games/top?limit=100', twitchHeaders)
      .then(res => this.setState({
        topGames: res.data.top
      }));
  };
  
  selectGame = game => {
    this.props.selectGame(game);
    this.closeGamesMenu();
  }

  toggleGamesMenu = e => {
    e.stopPropagation();
    this.setState(prevState => ({ menuIsOpen: !prevState.menuIsOpen }));
  };

  handleControllerClick = e => {
    if (e.target.classList.contains('controls-wrapper') && this.state.menuIsOpen) {
      this.closeGamesMenu();
    }
  };

  closeGamesMenu = () => this.setState({ menuIsOpen: false });

  render() {
    return (
      <div id="search-controller" onClick={this.handleControllerClick}>
        <div className="controls-wrapper">
          <div className="game-controller">
            <SelectedGame
              selectedGame={this.props.selectedGame}
              toggleGamesMenu={this.toggleGamesMenu}
            />
            <GamesMenu
              games={this.state.topGames}
              isOpen={this.state.menuIsOpen}
              selectGame={this.selectGame}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GameController;
