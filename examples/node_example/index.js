/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
const vhttp = require('http');
const url = require('url');
const router = require('./route');

/**
 * Adds numbers up.
 * @param {number} req
 * @param {number} res
 */
function onRequest(req, res) {
  const pathname = url.parse(req.url).pathname;
  const content = router.route(pathname);

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`
  Hello World of Ndoe.js. (by Vibert Thio)
  ${content}`);
}


vhttp.createServer(onRequest).listen(3000);
console.log('Server has started to listen at port: 3000.');
