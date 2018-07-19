import React from 'react';

const Header = ({title, id}) => (
  <header id={id}>
    <h1>{title}</h1>
  </header>
);

export default Header;
