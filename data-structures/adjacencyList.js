
var nextId = 0;

// Recursive graph structure.
// Each member of the graph is stored in the nodeset of the head graph node.
// Each edge of a node is stored in the nodeset of its asscociated node.

var makeGraph = function(data) {

	return {
		id: ++nextId,
		amount: 0,
		nodeSet: {},
		nodes: [],
		data : data || {}
	};

};

var addNode = function(graph, node) {

	if (!graph.nodeSet[node.id]) {
		graph.nodeSet[node.id] = node;
		graph.nodes.push(node);
		graph.amount += 1;
	}

};

var getNode = function(graph, id) {

	return graph.nodeSet[id];

};

var getEdges = function(node) {
	return [node.nodeSet, node.nodes];
};
