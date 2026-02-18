const findTheOldest = function(people) {
	let peopleWithAge = people.map( function(person) {
		if ( person.yearOfDeath === undefined )
		{
			return (new Date()).getFullYear() - person.yearOfBirth;
		}
		else
		{
			return ( person.yearOfDeath - person.yearOfBirth );
		}
	});
	let maxAge = Math.max(...peopleWithAge); 	
	let indexOldest = peopleWithAge.findIndex( age => age === maxAge );
	return people[indexOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
