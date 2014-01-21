// Simple list and helpers implementation in js.

var makeList = function(item) {
	return {
		head : item,
		tail : null
	};
};

var recurse = function(list, base) {
	if (base(list)) return list;
	else if (list.tail) {
		return recurse(list.tail, base);
	}
};

var last = function(list) {
	return recurse(list, function(l) {
		return l.tail == null;
	});
};

var value = function(list) {
	return list.head;
};

var insert = function(list, item) {
	var newNode = makeList(item);
	last(list).tail = newNode;
	return newNode;
};

var predecessor = function(list, node) {
	return recurse(list, function(l) {
		return l.tail === node;
	});
};

var successor = function(node) {
	return node.tail;
};

var remove = function(list, node) {
	var prev = predecessor(list, node);
	var tail = node.tail ? node.tail : undefined;
	prev.tail = tail;
};

var map = function(list, fn, result) {
	result = result || [];
	result.push(fn(list));
	if (list.tail) {
		return map(list.tail, fn, result);
	} else {
		return result;
	}
};

var foldl = function(list, fn, acc) {
	acc = acc || 0;
	acc = fn(list, acc);
	if (list.tail) {
		return foldl(list.tail, fn, acc);
	} else {
		return acc;
	}
};

var max = function(list, m) {
	m = m || list.head;
	m = list.head > m ? list.head : m;

	if (list.tail) {
		return max(list.tail, m);
	}
	else {
		return m;
	}
};
