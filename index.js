const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connecting to mongodb
mongoose
  .connect('mongodb://db:27017/node-mongo-docker-db', { useNewUrlParser: true })
  .then(res => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.log('Error in connection');
  });

// Route to test
app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = 9000;

app.listen(port, () => {
  console.log('Server running on port 9000');
});
