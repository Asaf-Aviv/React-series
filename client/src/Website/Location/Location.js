import React from 'react';
import Icon from '@material-ui/core/Icon';

import './Location.css';

const locationInfo = [
  { icon: 'location_on', text: '1488 The Moon' },
  { icon: 'phone_in_talk', text: '777-777-7777' },
  { icon: 'alternate_email', text: 'Moon@gmail.com' }
];

const Location = () => (
  <div id="location-wrapper">
    <h3>Company</h3>
    <div className="location-info">
      <ul>
        {locationInfo.map(info => 
          <li key={info.icon}>
            <Icon>{info.icon}</Icon>
            {info.text}
          </li>
        )}
      </ul>
    </div>
  </div>
);

export default Location;
