/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
const vhttp = require('http');

/**
 * Adds numbers up.
 * @param {number} req The number to be added.
 * @param {number} res The number to be added.
 */
function onRequest(req, res) {
  console.log('Request received.');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World');
  res.end();
}

vhttp.createServer(onRequest).listen(3000);
console.log('Server has started to listen at port: 3000.');
