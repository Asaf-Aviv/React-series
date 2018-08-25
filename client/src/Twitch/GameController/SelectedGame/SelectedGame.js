import React from 'react';
import handIcon from '../../../icons/hand.svg';

const SelectedGame = ({ selectedGame, toggleGamesMenu }) => (
  <div className="selected-game" onClick={toggleGamesMenu}>
    {
      selectedGame
        ? <img src={selectedGame.box.medium} alt={selectedGame.name} />
        : <div style={{ color: "#00ffe7" }}>SELECT GAME
            <img className="game-pointer" src={handIcon} alt="hand" />
          </div>
    }
  </div>
);

export default SelectedGame;
