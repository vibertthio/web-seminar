const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! from vib');
});

app.get('/user/:name', (req, res) => {
  res.send(req.params.name);
});

app.get('/post/:id', (req, res) => {
  res.send(req.params.id);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
