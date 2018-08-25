import React from 'react';
import Status from './Status/Status';
import StreamInfo from './StreamInfo/StreamInfo';
import UserLogo from '../../UserLogo/UserLogo';

const StreamerCard = ({ channel, selectStream }) => (
  <li key={channel._id} title={channel.channel.status} onClick={() => selectStream(channel.channel.name)}>
    <div className="streamer-wrapper">
      <Status viewers={channel.viewers}/>
      <UserLogo 
        logoSrc={channel.channel.logo}
        displayName={channel.channel.display_name}
      />
      <StreamInfo
        userName={channel.channel.display_name}
        game={channel.game}
      />
    </div>
  </li>
);

export default StreamerCard;
