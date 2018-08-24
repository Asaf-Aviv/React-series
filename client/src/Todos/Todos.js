import React, { Component } from 'react';
import Header from '../components/Header/Header';
import TodosList from './TodosList/TodosList';
import TodosForm from './TodosForm/TodosForm';
import ErrorModal from './ErrorModal/ErrorModal';
import axios from 'axios';

import './Todos.css';

const colorNavbar = () => {
  const nav = document.querySelector('.nav-wrapper');
  nav.style.boxShadow = '0 3px 5px rgba(107, 107, 107, 0.66)';
  nav.style.backgroundColor = '#10343c';
  document.querySelectorAll('.nav-wrapper a').forEach(link => link.style.color = '#2fdce8');
  document.querySelector('.drawer-container > ul').style.backgroundColor = '#10343c';
};

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

  fetchItems = async () => {
    this.setState({ isLoading: true });
    try {
      const { data:todosList } = await axios.get('/api/todos');
      this.setState({ todos: todosList, isLoading: false });
    } catch(err) {
      this.errorSetter(err.response.data)
    }
  };

  deleteItem = async todoItem => {
    this.setState({ isLoading: true });
    try {
      const { data:deletedTodo }= await axios.delete(`/api/todos/${todoItem._id}`);
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo._id !== deletedTodo._id)
      }),
      () => this.clearLoading());
    } catch (err) {
      this.errorSetter(err.response.data)
    }
  }

  addItem = async todoItem => {
    this.setState({ isLoading: true });
    try {
      const { data:newDoto } = await axios.post('/api/todos', { todoItem });
      this.setState(prevState => ({
        todos: [...prevState.todos, newDoto]
      }),
      () => this.clearLoading())
    } catch (err) {
      this.errorSetter(err.response.data);
    }
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
    },
    () => this.flashError())
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
