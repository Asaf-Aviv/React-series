import React, { Component } from 'react';
import Header from '../components/Header/Header';
import TodosList from './TodosList/TodosList';
import TodosForm from './TodosForm/TodosForm';
import ErrorModal from './ErrorModal/ErrorModal';
import axios from 'axios';

import './Todos.css';

const colorNavbar = () => {
  const nav = document.querySelector('.nav-wrapper');
  const navLinks = document.getElementsByTagName('a');
  nav.style.boxShadow = '0 3px 5px rgba(107, 107, 107, 0.66)';
  nav.style.backgroundColor = '#fff';
  [...navLinks].map(link => link.style.color = '#656565');
}

class Todos extends Component {
  state = {
    todos: [],
    isLoading: false,
    errorMessage: ''
  };
  
  componentDidMount = () => {
    colorNavbar();
    this.fetchItems();
  };

  fetchItems = () => {
    this.setState({ isLoading: true });

    axios.get('/api/todos')
      .then(res => this.setState({ todos: res.data, isLoading: false }))
      .catch(err => this.errorSetter(err.response.data));
  };

  deleteItem = todoItem => {
    this.setState({ isLoading: true });

    axios.delete(`/api/todos/${todoItem._id}`)
      .then(res => {
        this.setState(prevState => ({
          todos: prevState.todos.filter(todo => todo._id !== res.data._id)
        }), () => this.clearLoading());
      })
      .catch(err => this.errorSetter(err.response.data));
  };

  addItem = todoItem => {
    this.setState({ isLoading: true });

    axios.post('/api/todos', { todoItem })
      .then(res => {
        this.setState(prevState => ({
          todos: [...prevState.todos, res.data]
        }), () => this.clearLoading());
      })
      .catch(err => this.errorSetter(err.response.data));
  };

  clearLoading = () => (
    this.setState({
      errorMessage: '',
      isLoading: false
    })
  );

  errorSetter = errorMessage => (
    this.setState({
      errorMessage,
      isLoading: false
    }, () => this.flashError())
  );

  flashError = () => {
    const errorModal = document.querySelector('.error-modal');
    errorModal.classList.remove('active');
    setTimeout(() => errorModal.classList.add('active'), 20);
  };

  render() {
    return (
      <div id="todos-app">
        <div id="todos-wrapper">
          <Header title="MERN Todo App" id="todos-header"/>
          <TodosList todos={this.state.todos} deleteItem={this.deleteItem} isLoading={this.state.isLoading}/>
          <TodosForm addItem={this.addItem} />
        </div>
        <ErrorModal errorMessage={this.state.errorMessage} />
      </div>
    );
  }
}

export default Todos;
