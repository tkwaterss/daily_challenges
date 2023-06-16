//Special Integer
//Given an array K of integers, find the special integer x such that there are x integers in the array k that are larger than or equal to x.
//The special integer doesn't have to exist in the array k
//You can assume that there's always going to be one special integer or none in the array k. I f no special integers are found, return -1.
const test = [0, 4, 1, 0, 4]
const test2 = [1,2,3,5,6,7,8]
const test3 = [1,2,3,4,5,6,7,8]

const specialInteger = (array) => {
  let value;
  for (let i = 1; i <= array.length; i++) {
    let count = array.filter((item) => {
      return item >= i;
    });
    if (count.length === i) {
      value = i;
    }
  }
  return value ? value : -1;
};

// console.log(specialInteger(test))
// console.log(specialInteger(test2))
// console.log(specialInteger(test3))

//Most Repeated Character
//Given a string S, return the most frequent character (an alphabet letter) in the string s

const testStr = 'Hello World';
const testStr2 = 'asdabaslkjbalsdjalav ds;adadakdjhadkljasdfsjkahgioqeoiwaoeur';

const repeatedCharacter = (string) => {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  string = string.toLowerCase().split('')
  let char;
  let maxCount = 0;
  for (let i = 0; i < alphabet.length; i++) {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === alphabet[i]) {
        count++
      }
    }
    if (count > maxCount) {
      char = alphabet[i];
      maxCount = count;
    }
  }

  return [char, maxCount];
};

console.log(repeatedCharacter(testStr))
console.log(repeatedCharacter(testStr2))