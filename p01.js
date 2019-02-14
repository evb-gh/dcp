// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function dcp(given, k) {
	// return true if two num in "given" = "k"
	let i;
	let j;

	i = 0;
	while (i < given.length) {
		j = 0;
		while (j < given.length) {
			if (given[i] + given[j] == k) {
				return true;
			} else {
				j++;
			}
		}
		i++;
	}
	return false;
}


const test = function () {
	dcp([10, 15, 3, 7], 17) ? console.log("it works") : console.log("keep trying");
}

test();