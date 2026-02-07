const removeFromArray = function() {
	if (arguments.length === 0) { return ;}
	else if ( arguments.length === 1) { return arguments[1] ;}
	else {
		let i = 0;
		for (arg of arguments) {
			if (i == 0) {
				i++;
				continue;
			}
			let index = arguments[0].indexOf(arg);
			while ( index !== -1 ) {
				arguments[0].splice(index, 1);
				index = arguments[0].indexOf(arg);
			}
		}
	}
	return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
