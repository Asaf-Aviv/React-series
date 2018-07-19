import React, { Component } from 'react';

import './TodosForm.css';

class TodosForm extends Component {
  constructor() {
    super();
    this.state = {
      itemInput: ''
    };
  }

  handleChange = e => {
    this.setState({ itemInput: e.target.value });
  };

  handleSubmit = e => {
    this.props.addItem(this.state.itemInput);
    this.setState({ itemInput: '' });
    e.preventDefault();
  };

  render() {
    return(
      <form id="add-item-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.itemInput}
        />
        <input 
          type="submit"
          value="Add"
        />
      </form>
    );
  }
}

export default TodosForm;
