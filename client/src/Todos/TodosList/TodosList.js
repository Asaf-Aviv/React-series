import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import Loader from '../../components/Loader/Loader';

import './TodosList.css';

const TodosList = ({ todos, deleteItem, isLoading }) => (
  <main id="todos-list">
    {isLoading && <Loader />}
    {todos.length > 0 &&
      <ul>
        {todos.map(todo => 
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteItem={deleteItem}
          />
        )}
      </ul>
    }
  </main>
);

export default TodosList;
