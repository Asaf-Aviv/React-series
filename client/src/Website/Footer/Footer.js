import React from 'react';
import Container from '../../components//Container/Container';

import './Footer.css';

const socialsClasses = [
  'fa-facebook',
  'fa-twitter',
  'fa-github',
  'fa-google',
  'fa-linkedin',
  'fa-instagram'
];

const socials = socialsClasses.map(social => <li key={social} ><a><i className={"fab " + social}></i></a></li>);

const Footer = () => (
  <footer id="footer">
    <Container className="d-flex">
      <div id="socials-wrapper">
        <ul>
          {socials}
        </ul>
      </div>
    </Container>
    <div className="copyrights text-center">
      &copy; - 2018 Company
    </div>
  </footer>
);

export default Footer;
