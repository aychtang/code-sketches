// Simple list and helpers implementation in js.

var makeList = function(item) {
	return {
		head : item,
		tail : null
	};
};

var clone = function(list) {
	return {
		head: list.head,
		tail: list.tail
	};
};

var recurse = function(list, base) {
	if (base(list)) {
		return list;
	}
	else if (list.tail) {
		return recurse(list.tail, base);
	}
};

var last = function(list) {
	return recurse(list, function(l) {
		return l.tail == null;
	});
};

var insert = function(list, item) {
	var newList = clone(list);
	last(newList).tail = makeList(item);
	return newList;
};

var predecessor = function(list, node) {
	return recurse(list, function(l) {
		return l.tail === node;
	});
};

var value = function(list) {
	return list.head;
};

var successor = function(node) {
	return node.tail;
};

var remove = function(list, node) {
	var newList = clone(list);
	var prev = predecessor(newList, node);
	var tail = node.tail ? node.tail : undefined;
	prev.tail = tail;
	return newList;
};

var foldl = function(list, fn, acc) {
	acc = acc || 0;
	acc = fn(list, acc);

	if (list.tail) {
		return foldl(list.tail, fn, acc);
	}
	else {
		return acc;
	}
};

var map = function(list, fn) {
	return foldl(list, function(l, a) {
		a.push(fn(l));
		return a;
	}, []);
};

var max = function(list) {
	return foldl(list, function(l, a) {
		return l.head > a ? l.head : a;
	}, list.head);
};

var min = function(list, m) {
	return foldl(list, function(l, a) {
		return l.head < a ? l.head : a;
	}, list.head);
};

var length = function(list) {
	return foldl(list, function(l, a) {
		return a + 1;
	});
};

var every = function(list, predicate) {
	return foldl(list, function(l) {
		return predicate(l);
	}, true);
};

var print = function(list) {
	console.log(map(list, function(l) {
		return l.head;
	}));
};
