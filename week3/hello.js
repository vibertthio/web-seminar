exports.config = (req, res, next) => {
  console.log('Do something here..');
  console.log(req.query);
  res.send(JSON.stringify(req.query));
  next();
};

exports.index = () => {
  console.log('Finish..');
};


exports.parseForm = (req, res) => {
  console.log('recieve');
  console.log(req.body);
  res.send(JSON.stringify(req.body));
};

const users = [];
const nOfUsers = 2;
users[0] = {
  id: 1,
  name: 'Joe',
  age: 18,
};

users[1] = {
  id: 2,
  name: 'John',
  age: 18,
};

exports.getUser = (req, res, next) => {
  if (req.params.id < nOfUsers) {
    console.log(`get the data of user ${req.params.id}`);
    res.status(200).send(JSON.stringify(users[req.params.id]));
  } else {
    next();
  }
};
