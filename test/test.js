var assert = require('assert');
// var expected = true;
// var actual = false
// assert.equal(expected, actual);





var ac = require('../index.js');
// var ac = require('../'); same thing as above

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log('###ac.import imports list of words into memory');
ac.import(function (words) {
	console.log('words.txt had' + words.length + 'words in it');
	assert.equal(words.length, 99171);
});
