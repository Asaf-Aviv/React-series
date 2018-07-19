import React from 'react';

import './Container.css';

const Container = props => (
  <div className={props.className ? `container ${props.className}` : "container"}>
    {props.children}
  </div>
);

export default Container;
