import React, { Component } from 'react';

import './TodosForm.css';

class TodosForm extends Component {
  state = {
    itemInput: ''
  };

  handleChange = e => {
    this.setState({ itemInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.itemInput);
    this.setState({ itemInput: '' });
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
