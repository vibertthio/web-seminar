/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
const showPage = require('./showPage');

/**
/ Route function
* @param {String} pathName
* @returns {String} The string to be shown on the web page.
*/
function route(pathName) {
  const handle = {};
  handle['/'] = showPage.home;
  handle['/blog'] = showPage.blog;

  if (typeof handle[pathName] === 'function') {
    return handle[pathName]();
  }
  const ret = `404 Not Found ${pathName}`;
  console.log(ret);
  return ret;
}

exports.route = route;
