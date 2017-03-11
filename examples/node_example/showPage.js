/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

/**
 * Show home page.
 * @returns {String} The string to be shown on the web page.
 */
function home() {
  console.log('This is the home page.');
  return 'This is home page';
}

/**
 * Show blog page.
 * @returns {String} The string to be shown on the web page.
 */
function blog() {
  console.log('This is the blog page.');
  return 'This is a blog page';
}

exports.home = home;
exports.blog = blog;
