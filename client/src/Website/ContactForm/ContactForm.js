import React, { Component } from 'react';

import './ContactForm.css';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = { 
      name: '',
      email: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div id="form-wrapper">
        <h3 className="text-center">Contact Us</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} autoComplete="name" placeholder="Name" />
          </label>
          <label htmlFor="email">
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} autoComplete="email" placeholder="Email" />
          </label>
          <label htmlFor="message">
            <textarea name="message" rows="8" value={this.state.message} onChange={this.handleChange} placeholder="Message"/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
