import React from 'react';

const TodoItem = ({ deleteItem, todo }) => {
  const handleDelete = () => {
    deleteItem(todo);
  };

  return (
    <li>
      {todo.todoItem}
      <span onClick={handleDelete}>&#9747;</span>
    </li>
  );
};

export default TodoItem;
