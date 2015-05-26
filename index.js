var fs = require('fs');
var ac = {};


ac.import = function (callback) {
	if (!callback || typeof callback !== 'function') {
		return new Error('callback arguments must be a function');
	} 
	var filename = __dirname + '/words.txt';
	fs.readFile(filename, 'utf8', function (err, data) {
		ac.words = data.split('\n');
		return callback(err, ac.words);
		// console.log(data);
		// callback(ac.words);
	});
}

ac.findWords = function (word, callback) {
	var found = [];

	for (var i = 0; i < ac.words.length; i++) {
        if (ac.words[i].search(word) > -1) {
        	found.push(ac.words[i]);
        } 
    }
	return callback(null, found);
}

ac.stats = function (word, callback) {
	if (!ac.searches) {
		ac.searches = {};
	} 
	if (!ac.searches[word]) { //if searched doesnt have any word yet
		ac.searches[word] = [];
	}
	ac.searches[word].push(new Date().getTime());
	callback(null, ac.searches);
}


module.exports = ac;