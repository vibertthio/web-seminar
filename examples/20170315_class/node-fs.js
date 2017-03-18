const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
  const output = `${data}我又被寫出去了～`;
  fs.writeFile('./output.txt', output, { encoding: 'utf8' }, (e) => {
    if (e) throw e;
    console.log('It\'s saved!');
  });
});
