const express  = require('express')
const router   = express.Router()
const TodoItem = require('../../models/Todo')

router.get('/', (req, res) => {
  TodoItem.find()
    .then(doc => res.send(doc))
    .catch(() => res.status(500).send('Something went wrong'))
})

router.post('/', (req, res) => {
  const todoItem = req.body.todoItem
  
  if (!todoItem) {
    return res.status(400).send('Todo Item cannot be empty')
  }

  new TodoItem({ item: todoItem })
    .save()
    .then(doc => res.send(doc))
    .catch(() => res.status(500).send('Something went wrong'))
})

router.delete('/:itemId', (req, res) => {
  TodoItem.findByIdAndRemove(req.params.itemId)
    .then((doc, err) => {
      if (!doc) {
        return res.status(404).send('Todo item not found!')
      }
      res.send(doc)
    })
    .catch(() => res.status(500).send('Something went wrong'))
})

module.exports = router
