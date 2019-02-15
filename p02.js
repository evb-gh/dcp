// Given an array of integers, return a new array such that each element at
// index i of the new array is the product of all the numbers in the original
// array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be
// [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would
// be [2, 3, 6].

function product(arr){
	let i;
  let j;
	let prod;
  const res = [];

  j = 0;
  while (j < arr.length){
    prod = 1;
    i = 0;  
    while (i < arr.length){
      if (arr[j] == arr[i]){
        i++;
      } else {
        prod *= arr[i];
		    i++;
      }
	  }
    res.push(prod);
    j++;
  }
	
	return (res);
}

console.log(product([3, 2, 1])); // [ 2, 3, 6 ]
console.log(product([1, 2, 3, 4, 5])); // [ 120, 60, 40, 30, 24 ]