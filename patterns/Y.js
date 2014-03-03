var Y = function(f) {
	return function(n) {
		return f(f)(n);
	};
};

var factorial = Y(function(self) {
	return function(n) {
		if (n === 0) return 1;
		return n * self(self)(n - 1);
	};
});

var fib = Y(function(self) {
	return function(n) {
		if (n < 2) return n;
		return self(self)(n - 1) + self(self)(n - 2);
	};
});
