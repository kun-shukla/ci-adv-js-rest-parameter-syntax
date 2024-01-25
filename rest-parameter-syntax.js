/**
 * To run this file in Gitpod, use the
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call

// Extra arguments are ignored

// Function using ...rest

/*You will assign an array to a variable which will contain a copy of the array mixedLetters and 6 other letters. ✅
You will create an arrow function which should take two parameters. This function should combine all the argument passed in into a single array and sort them and reverse them and then return this array
You are free to choose an arrow function of your choice to do this.
Within the function body, you are free to create the array any way you want, but try to look out for opportunities to use what you have been learning in the advanced JavaScript material.
*/

let mixedLetters = ["b", "d", "a", "c", "f", "e"];

let moreMixedLetters = [...mixedLetters, "h", "k", "g", "j", "i", "l"];
// console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => {
  let newArray = [...arr];
  for (i of letters) {
    newArray.push(i);
  }
  newArray.sort().reverse();
  return newArray;
};

let reverseSort = updateSortReverse(moreMixedLetters, "n", "m", "o");
console.log(moreMixedLetters);
console.log(reverseSort);
console.log(mixedLetters);

// const updateSortReverse = (arr, ...letters) => [...arr, ...letters].sort().reverse()
