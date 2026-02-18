const fibonacci = function(order) {
	if (order < 0) { return "OOPS"; }
	let total = 1;
	if (order == 0) {
		return 0;
	} if (order == 1 || order == 2) {
		return 1;
	} else {
		return (fibonacci(Number(order) - 1) + fibonacci(Number(order) - 2));
	}
};

// Do not edit below this line
module.exports = fibonacci;
