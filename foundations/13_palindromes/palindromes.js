const palindromes = function (str) {
	let endIndex = str.length - 1;
	let startIndex = 0;
	str = str.toUpperCase();
	const skips = [" ", ".", ",", ":", "!", "?"];
	while (endIndex > str.length / 2 )
	{
		if ( skips.includes(str[startIndex]) ) {
			startIndex++;
			continue;
		}
		if ( skips.includes(str[endIndex]) ) {
			endIndex--;
			continue;
		}
		if (str[startIndex] !== str[endIndex]) {
			return false;
		} else {
			startIndex++;
			endIndex--;
		}
	}
	return true;
};

// console.log(palindromes('racecar')); // true
// console.log(palindromes('tacos')) // false

// Do not edit below this line
module.exports = palindromes;
