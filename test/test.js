var assert = require('assert');
// var expected = true;
// var actual = false
// assert.equal(expected, actual);





var ac = require('../index.js');
// var ac = require('../'); same thing as above

assert.equal(typeof ac, 'object');
assert.equal(typeof ac.import, 'function');

console.log('###ac.import imports list of words into memory');
ac.import(function (err, words) { //this is our callback function
	console.log('words.txt had' + words.length + 'words in it');
	assert.equal(words.length, 99171);
});

console.log('#attempt to invke ac.import without a valid callback');
var error = ac.import('string');
assert.equal(error.message, 'callback arguments must be a function');

console.log('#ac.findWords finds a string in words array');
ac.import(function() {
	ac.findWords('awes', function (err, found) {
	assert.equal(err, null);
	assert.equal(found.length, 10);
	})
});

console.log('### ac.stats tracks which words/strings were searched for');
ac.import(function() {
	ac.stats('awesome', function (err, stats) {
		console.log(stats);
		assert.equal(stats['awesome'].length, 1);
		ac.stats('awesome', function (err, stats) {
		console.log(stats);
		assert.equal(stats['awesome'].length, 2);
		});
	});
});
