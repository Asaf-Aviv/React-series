import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    const nav = document.querySelector('.nav-wrapper');
    const navLinks = document.getElementsByTagName('a');
    nav.style.boxShadow = '0 3px 5px rgba(107, 107, 107, 0.66)';
    nav.style.backgroundColor = '#fff';
    [...navLinks].map(link => link.style.color = '#656565');
  }
  
  render() {
    return (
      <div></div>
    );
  }
}

export default Home;
