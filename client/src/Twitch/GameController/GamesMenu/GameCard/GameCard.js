import React from 'react';

const GameCard = ({ game, selectGame }) => (
  <li title={game.name} onClick={() => selectGame(game)}>
    <div className="game-wrapper">
      <div className="logo">
        <img src={game.box.medium} alt={game.name + " logo"} />
      </div>
    </div>
  </li>
);

export default GameCard;
