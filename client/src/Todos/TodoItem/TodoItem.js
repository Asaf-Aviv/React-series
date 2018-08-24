import React from 'react';
import Icon from '@material-ui/core/Icon';

const TodoItem = ({ deleteItem, todo }) => {
  const handleDelete = () => {
    deleteItem(todo);
  };

  return (
    <li>
      {todo.todoItem}
      <Icon onClick={handleDelete} fontSize="inherit">close</Icon>
    </li>
  );
};

export default TodoItem;
