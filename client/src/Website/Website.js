import React, { Component, Fragment } from 'react';
import Header from './Header/Header';
import OurServices from './OurServices/OurServices';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

class Website extends Component {
  componentDidMount() {
    const nav = document.querySelector('.nav-wrapper');
    const navLinks = document.querySelectorAll('.nav-wrapper a');
    nav.style.boxShadow = '0 3px 5px rgba(107, 107, 107, 0.66)';
    nav.style.backgroundColor = '#fff';
    [...navLinks].map(link => link.style.color = '#656565');
  }

  render() {
    return (
      <Fragment>
        <Header />
        <OurServices />
        <Contact />
        <Footer/>
      </Fragment>
    );
  }
}

export default Website;
