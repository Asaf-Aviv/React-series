import React from 'react';
import Container from '../../components/Container/Container';
import Location from '../Location/Location';
import ContactForm from '../ContactForm/ContactForm';
import GoogleMap from '../GoogleMap/GoogleMap';

import './Contact.css';

const Contact = () => (
  <section id="contact-wrapper">
    <Container>
      <div className="contact-group">
        <Location />
        <ContactForm />
        <GoogleMap />
      </div>
    </Container>
  </section>
);

export default Contact;
