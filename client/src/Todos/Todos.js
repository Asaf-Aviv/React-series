import React, { Component } from 'react';
import Header from '../components/Header/Header';
import TodosList from './TodosList/TodosList';
import TodosForm from './TodosForm/TodosForm';
import axios from 'axios';

import './Todos.css';

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      isLoading: false
    };
  }
  
  componentWillMount = () => {
    this.setState({ isLoading: true });
    axios.get('/api/todos')
      .then(res => this.setState({ todos: res.data, isLoading: false }))
      .catch(err => console.log(JSON.stringify(err, null, 2)));
  }

  componentDidMount() {
    const nav = document.querySelector('.nav-wrapper');
    const navLinks = document.getElementsByTagName('a');
    nav.style.boxShadow = '0 3px 5px rgba(107, 107, 107, 0.66)';
    nav.style.backgroundColor = '#fff';
    [...navLinks].map(link => link.style.color = '#656565');
  };

  deleteItem = todoItem => {
    this.setState({ isLoading: true });
    axios.delete(`/api/todos/${todoItem._id}`)
      .then(res => {
        this.setState(prevState => ({
          todos: prevState.todos.filter(todo => todo._id !== res.data._id),
          isLoading: false
        }));
      })
      .catch(err => console.log(JSON.stringify(err, null, 2)));
  };

  addItem = todoItem => {
    this.setState({ isLoading: true });
    axios.post('/api/todos', { todoItem, })
      .then(res => {
        this.setState(prevState => ({
          todos: [...prevState.todos, res.data],
          isLoading: false
        }));
      })
      .catch(err => console.log(JSON.stringify(err, null, 2)));
  };

  render() {
    return (
      <div id="todos-app">
        <div id="todos-wrapper">
          <Header title="MERN Todo App" id="todos-header"/>
          <TodosList todos={this.state.todos} deleteItem={this.deleteItem} isLoading={this.state.isLoading}/>
          <TodosForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default Todos;
