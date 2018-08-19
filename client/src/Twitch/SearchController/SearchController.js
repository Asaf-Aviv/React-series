import React, { Component } from 'react';
import axios from 'axios';
import { twitchHeaders } from '../../utils/utils';

import './SearchController.css';

class SearchController extends Component {
  state = {
    topGames: [],
    menuIsOpen: false
  };

  componentDidMount = () => {
    axios('https://api.twitch.tv/kraken/games/top?limit=100', { ...twitchHeaders })
      .then(
        res => this.setState({ topGames: res.data.top })
      )
  };

  toggleGamesMenu = () => (
    this.setState(
      prevState => ({ menuIsOpen: !prevState.menuIsOpen })
    )
  );

  selectGameHandler = game => {
    this.props.updateGame(game);
    this.setState({ menuIsOpen: false });
  }

  render() {
    return (
      <div id="search-controller">
        <div className="controls-wrapper">
          <div className="game-controller">
            <div className="selected-game" onClick={this.toggleGamesMenu}>
              {
                this.props.selectedGame
                  ? <img src={this.props.selectedGame.box.medium} alt={this.props.selectedGame.name}/>
                  : <div style={{color: '#ff008d'}}>SELECT GAME</div>
              }
            </div>
            <div className="games-menu" style={{display: this.state.menuIsOpen ? 'block' : 'none'}}>
              <ul>
                {this.state.topGames.map(game => 
                  <li key={game.game.name} title={game.game.name} onClick={() => this.selectGameHandler(game.game)}>
                    <div className="game-wrapper">
                      <div className="logo">
                        <img src={game.game.box.medium} alt={game.game.name + " logo"} />
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchController;