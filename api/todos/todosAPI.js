const router = require('express').Router();
const TodosController = require('../controllers/todos');

router.get('/', TodosController.getAllTodos);

router.post('/', TodosController.createTodo);

router.delete('/:itemId', TodosController.deleteTodo);

router.use((req, res) => res.status(500).send('Something went wrong.'));

module.exports = router;
