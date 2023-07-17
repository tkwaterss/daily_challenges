// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

let test1 = "Success"
let test2 = " ( ( )"; //fails this test, should return ")))))(" instead of "))))))"


const duplicateEncode = (string) => {
  string = string.toLowerCase().split("");
  for (let i = 0; i < string.length; i++) {
    let matches = string.filter(letter => {
      return letter === string[i]
    })
    if (matches.length > 1) {
      string = string.map(letter => {
        if (letter === string[i]) {
          return ')'
        } else {
          return letter;
        }
      })
    }
  }
  return string.map(letter => {
    if (letter !== ')') {
      return '(';
    } else {
      return letter
    }
  }).join('');
};

console.log(duplicateEncode(test1));
console.log(duplicateEncode(test2));
