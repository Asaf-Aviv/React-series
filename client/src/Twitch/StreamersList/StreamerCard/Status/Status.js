import React from 'react';

const Status = ({ viewers }) => (
  <div className="status">
    <span>{viewers.toLocaleString()}</span>
    <i className="fas fa-circle" />
  </div>
);

export default Status;
