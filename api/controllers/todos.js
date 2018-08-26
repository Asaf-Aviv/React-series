const TodoItem = require('../../models/Todo');

exports.getAllTodos = (req, res, next) => {
  TodoItem
    .find()
    .then(doc => res.send(doc))
    .catch(() => next());
};

exports.createTodo = (req, res, next) => {
  const todoItem = req.body.todoItem;
  
  if (!todoItem) {
    return res.status(400).send('Todo Item cannot be empty.');
  }

  new TodoItem({ todoItem })
    .save()
    .then(doc => res.send(doc))
    .catch(() => next());
};

exports.deleteTodo = (req, res, next) => {
  TodoItem.findByIdAndRemove(req.params.itemId)
    .then((doc, err) => {
      if (!doc) {
        return res.status(404).send('Todo item not found!.');
      }
      res.send(doc);
    })
    .catch(() => next());
};
