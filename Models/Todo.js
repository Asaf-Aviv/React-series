const mongoose = require('mongoose');
const Schema = mongoose.Schema;

TodoItemSchema = new Schema({
  item: {
    type: String,
    required: true
  }
});

module.exports = TodoItem = mongoose.model('Todos', TodoItemSchema);
