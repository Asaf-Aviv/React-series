import React from 'react';
import GameCard from './GameCard/GameCard';

const GamesMenu = ({ games, isOpen, selectGame }) => (
  <div className={`games-menu ${isOpen ? 'active' : ''}`}>
    <ul>
      {games.map(({ game }) => <GameCard key={game.name} game={game} selectGame={selectGame} />)}
    </ul>
  </div>
);

export default GamesMenu;
