const express = require('express');

const app = express();

// routing
app.get('/', (req, res) => {
  res.json({ text: 'GET!!!' });
});

// routing
app.post('/', (req, res) => {
  res.json({ text: 'POST!!!' });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
