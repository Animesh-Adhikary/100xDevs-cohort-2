/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const clearString = str.replace(/[^a-zA-Z]/g, '').toUpperCase();
  let i=0, j=clearString.length-1;

  while(j>=i){
    if(clearString.charAt(i)!==clearString.charAt(j)) return false;
    i++; j--;
  }

  return true;
}

module.exports = isPalindrome;
