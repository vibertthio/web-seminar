const express = require('express');
const hello = require('./hello.js');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

// GET / 回傳有包括 <h1>首頁</h1> 的 html
app.use('/', express.static('./public'));

// GET /api/query?x=123&y=234 會把 query 變成 json 傳回去
app.get('/api/query', hello.config);
app.get('/api/query', hello.index);

// POST /api/body 會把 body 收到的 x-www-form-urlencoded 變成 json 傳回去 (需加上 body-parser middleware)
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post('/api/body', urlencodedParser, hello.parseForm);

// GET /api/users/1 回傳 json
app.get('/users/:id', hello.getUser);

app.get('*', (req, res) => {
  res.status(404).send(`what???    ${req.url} not found.`);
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
