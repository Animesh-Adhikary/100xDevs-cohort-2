/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const countNum = str.match(/[aeiou]/gi);
  
  return countNum ? countNum.length : 0;
}

module.exports = countVowels;