import React, { Component } from 'react';

const colorNav = () => {
  const nav = document.querySelector('.nav-wrapper')
  nav.style.boxShadow = '0 3px 5px rgba(107, 107, 107, 0.66)';
  nav.style.backgroundColor = '#fff';
  document.querySelectorAll('.nav-wrapper a').forEach(link => link.style.color = '#656565');
  document.querySelector('.drawer-container > ul').style.backgroundColor = '#fff';
};

class Home extends Component {
  componentDidMount = () => {
    colorNav();
  };
  
  render() {
    return (
      <div></div>
    );
  }
}

export default Home;
