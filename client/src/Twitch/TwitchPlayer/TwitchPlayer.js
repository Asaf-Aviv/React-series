import React from 'react';
import closeIcon from '../../icons/close.svg';

import './TwitchPlayer.css';

const TwitchPlayer = ({ closeStream, showCloseButton }) => (
  <div id="twitch-player">
    <button className="close-btn" onClick={closeStream}>
      <img src={closeIcon} alt="close" />
    </button>
  </div>
);
  
export default TwitchPlayer;
