// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

let test1 = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

const findOdd = (array) => {
  let count = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in count) {
      count[array[i]]++;
    } else {
      count[array[i]] = 1;
    }
  }
  for (let key in count) {
    if (count[key] % 2 !== 0) {
      return +key;
    }
  }
};

console.log(findOdd(test1));
