import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';

import './OurServices.css';
import services from './Services.json';

const Service = props => (
  <div className="service-item">
    <i className={props.service.icon}></i>
    <h3>{props.service.title}</h3>
    <p>{props.service.text}</p>
    <Link to="/about">Learn More</Link>
  </div>
);

const OurServices = () => (
  <main className="service-wrapper text-center">
    <Container>
      <h2>SERVICES</h2>
      <div id="services">
        {services.map(service => 
          <Service key={service.id} service={service} />
        )}
      </div>
    </Container>
  </main>
);

export default OurServices;