import React from 'react';

import bigTowersPhoto from './big_towers.jpeg' 
import './Header.css';

const Header = () => (
  <header id="header">
    <div className="header-img-wrapper">
      <img src={bigTowersPhoto} alt="big towers"/>
    </div>
    <h1>
      HEADER
    </h1>
  </header>
);

export default Header;
