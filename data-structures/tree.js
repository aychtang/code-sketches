
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
	if (item < tree.item) {
		if (!tree.left)
			tree.left = makeTree(tree, item);
		else
			insert(tree.left, item);
	}

	else if (item >= tree.item) {
		if (!tree.right)
			tree.right = makeTree(tree, item);
		else
			insert(tree.right, item);
	}
};
