function isPalindrome(word) {
  // Write your algorithm here
  //word = prompt("Enter a Word:")
  word = word.toLocaleLowerCase();
  let palindrome = word.split('').reverse().join('')
  //return word === palindrome;
  if (word === palindrome){
    return true;
  }else{
    return false;
  }
}
console.log(isPalindrome('abba'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('a'));
console.log(isPalindrome('robot'));
console.log(isPalindrome('ab'));


/* 
  Add your pseudocode here
  - define a function
  - promt a user to input a word or enter the input when calling the function.
  - convert the word to lowercase
  - perform the reverse of the word
  - test if the orginal word is the same with the reversed word using === operator
  - return true and false 
*/ 
  
/*
  Add written explanation of your solution here
  - first i ill prompt a user to input a word.
  - i converted the word to lower case.
  - performed the reverse of the word using reverse()
  - tested if the origina word is the same  with the reversed word using the if and === operator. 
  - return an output. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


