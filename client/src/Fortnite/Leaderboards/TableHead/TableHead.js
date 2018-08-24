import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ wins }) => (
  <Fragment>
    <h3 className="title">Top 10 {wins ? "Wins" : "Kills"}</h3>
    <div className="head">
      <span>#</span>
      <span></span>
      <span>Username</span>
      <span>{wins ? "Wins" : "Kills"}</span>
      <span>{wins ? "Matches" : "K / D"}</span>
    </div>
  </Fragment>
);

TableHead.propTypes = {
  wins: PropTypes.bool
};

export default TableHead;
