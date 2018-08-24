import React from 'react';

import './Hamburger.css';

const Hamburger = props => (
  <div className="hamburger" onClick={props.handleClick}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default Hamburger;
