const sumAll = function(a, b) {
	let total = 0;
	if (! (typeof a === "number" || typeof b === "number")) { return "ERROR"; }
	if (! (Number.isInteger(a) && Number.isInteger(b)) ) { return "ERROR"; }
	if (a < 0 || b < 0) { return "ERROR"; }
	if (a > b) { [a, b] = [b, a]; }
	for (; a <= b; a++) {
		total += a;
	}
	return total;
};

// Do not edit below this line
module.exports = sumAll;
