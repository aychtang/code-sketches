// Build function runs init method on a module and returns it.
// Allowing you to init modules and keep a reference to them in one line.

var build = function(module) {
	module.init();
	return module;
};

var App = function() {};

App.prototype.init = function() {
	this.module = build(new App.module());
};
