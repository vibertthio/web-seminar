/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */


/**
 * Adds numbers up.
 * @param {number} num The number to be added.
 * @returns {function} The sum of the two numbers.
 */
 const currySum = function currying(num) {
   return (n) => {
     const value = n + num;
     console.warn(value);
     return currying(value);
   };
 };

 currySum(1)(2);
