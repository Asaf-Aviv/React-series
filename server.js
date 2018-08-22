require('dotenv').config()
const express     = require('express');
const path        = require('path');
const app         = express();
const port        = process.env.PORT || 5000;
const mongoose    = require('mongoose');
const todosAPI    = require('./api/todos/todosAPI');
const fortniteAPI = require('./api/fortnite/fortniteAPI');

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to mongoDB'));

app.use('/api/todos', todosAPI);
app.use('/api/fortnite', fortniteAPI);

if (process.env.NODE_ENV === 'production') {
  console.log('production mode')
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`));
