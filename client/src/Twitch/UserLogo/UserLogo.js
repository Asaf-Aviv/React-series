import React from 'react';

import './UserLogo.css';

const UserLogo = props => (
  <div className="user-logo">
    <img 
      src={props.logoSrc}
      alt={props.displayName + " profile image"}
    />
  </div>
);

export default UserLogo;
