// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

const addBinary = (num1, num2) => {
  let sum = num1 + num2;
  let binary = [];
  while (sum > 0) {
    binary.unshift(String(sum % 2))
    sum = Math.floor(sum / 2)
  }
  return String(binary.join())
}

console.log(addBinary(6,6))