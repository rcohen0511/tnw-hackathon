/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {string}
*/
var test = 1;
module.exports = (name = 'world', context, callback) => {
  test = test + 1;
  callback(null, test);

};
