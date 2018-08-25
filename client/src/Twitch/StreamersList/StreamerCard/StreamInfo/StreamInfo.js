import React from 'react';

const StreamInfo = ({ userName, game }) => (
  <div className="info">
    <div className="name">{userName}</div>
    <div className="game">{game}</div>
  </div>
);

export default StreamInfo;
