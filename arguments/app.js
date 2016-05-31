/*
* print process.argv
* process.argv is an array which saves the parameters
* [0] contains path to node.exe
* [1] contains path to app.js
* [2] contains arguments after app.js
*/
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});