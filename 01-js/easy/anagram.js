/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let count = 0;

  if (str1.length !== str2.length) return false;
  else {
    for (let i = 0; i < str1.length; i++) {
      for (let j = 0; j < str2.length; j++) {
        if (str1.charAt(i).toUpperCase() === str2.charAt(j).toUpperCase()) {
          count++; break;
        }
      }
    }
  }
  if(count!==str1.length) return false;
  return true;
}


// Approach 2 ------> * can't find the error

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   const map1 = new Map();
//   const map2 = new Map();

//   for (let i = 0; i < str1.length; i++) {
//     if (!map1.has(str1.charAt(i)))
//       map1.set(
//         str1.charAt(i).toUpperCase(),
//         map1.get(str1.charAt(i).toUpperCase()) || 0 + 1
//       );
//     else
//       map1.set(
//         str1.charAt(i).toUpperCase(),
//         map1.get(str1.charAt(i).toUpperCase()) + 1
//       );
//   }

//   for (let i = 0; i < str2.length; i++) {
//     if (!map2.has(str2.charAt(i).toUpperCase()))
//       map2.set(
//         str2.charAt(i).toUpperCase(),
//         map2.get(str2.charAt(i).toUpperCase()) || 0 + 1
//       );
//     else
//       map2.set(
//         str2.charAt(i).toUpperCase(),
//         map2.get(str2.charAt(i).toUpperCase()) + 1
//       );
//   }

//   for (let i = 0; i < str1.length; i++) {
//     if (
//       map1.get(str1.charAt(i).toUpperCase()) !==
//       map2.get(str1.charAt(i).toUpperCase())
//     ) {
//       return false;
//       break;
//     }
//   }
//   return true;
// }

module.exports = isAnagram;
