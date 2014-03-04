var Y = function(f) {
	return function(n) {
		return f(f)(n);
	};
};

var Ymem = function(f, cache) {
	var cache = cache || {};
	return function(n) {
		if (!cache[n]) {
			cache[n] = f(function(n) {
				return (Ymem(f, cache)(n));
			})(n);
		}
		return cache[n];
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

var memFactorial = Ymem(function(self) {
	return function(n) {
		if (n === 0) return 1;
		return n * self(n - 1);
	};
});

var memFib = Ymem(function(self) {
	return function(n) {
		if (n < 2) return n;
		return self(n - 1) + self(n - 2);
	};
});
