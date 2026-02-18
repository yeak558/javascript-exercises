const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let total = 0;
  for (el of arr) {
    total += el;
  }
  return total;
};

const multiply = function(arr) {
	let result = 1;
  for (el of arr) {
    result *= el;
  }
  return result;
};

const power = function(base, exp) {
	let total = 1;
  for (; exp > 0 ; exp-- ) {
    total *= base;
  }
  return total;
};

const factorial = function(a) {
	let result = 1;
  for (; a > 1; a--) {
    result *= a;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
