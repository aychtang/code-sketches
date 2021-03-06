
var makeTree = function(parent, item) {
	return {
		item: item,
		parent: parent,
		left: null,
		right: null
	};
};

var find = function(tree, item) {
	if (item == tree.item) {
		return tree;
	}

	if (item < tree.item && tree.left) {
		return find(tree.left, item);
	}
	else if (tree.right) {
		return find(tree.right, item);
	}
};

var insert = function(tree, item) {
	var direction = item < tree.item ? 'left' : 'right';

	if (tree[direction]) {
		insert(tree[direction], item);
	}
	else {
		tree[direction] = makeTree(tree, item);
	}
};

var traverse = function(tree, fn, queue) {
	var fifo = queue || [];
	fn(tree);
	tree.left && fifo.push(tree.left);
	tree.right && fifo.push(tree.right);

	if (fifo.length) {
		var next = fifo.shift();
		traverse(next, fn, fifo);
	}
};
