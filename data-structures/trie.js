// Stateful recursive insert.
// a = {}
// insert(a, 'helloworld');
// insert(a, 'hi');

var insert = function(trie, str) {
	if (!str.length) {
		return;
	}

	if (!trie[str[0]]) {
		trie[str[0]] = {};
	}

	return insert(trie[str[0]], str.substr(1, str.length));
};