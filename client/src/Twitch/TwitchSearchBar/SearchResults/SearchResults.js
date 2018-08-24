import React from 'react';
import UserLogo from '../../UserLogo/UserLogo';

const SearchResults = props => {
  if (!props.users.length) {
    return <div style={{ textAlign: 'center', padding: '1rem', color: '#fff' }}>User Not Found</div>;
  }
  
  return props.users.map(user => {
    return (
      <div className="user-wrapper" onClick={() => props.selectStream(user.display_name)} title={user.description} key={user.id}>
        <UserLogo logoSrc={user.profile_image_url} displayName={user.display_name} />
        <div className="name">{user.display_name}</div>
        <div className="views">
          <i className="far fa-eye" title="Channel Views">
            <span>{user.view_count.toLocaleString()}</span>
          </i>
        </div>
      </div>
  )});
};

export default SearchResults;
