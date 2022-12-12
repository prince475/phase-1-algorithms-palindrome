function isPalindrome(word) {
  let re = /[\W_]/g;
  let lowRegWord = word.toLowerCase().replace(re, '');
  let reverseWord = lowRegWord.split('').reverse().join(''); 
  return reverseWord === lowRegWord;
  // Write your algorithm here

}
isPalindrome("word");

/* 
  Add your pseudocode here
  declare a function 
  declare a variable palindrome that takes the form string
  Use boolean on your function to return false or true
  define output or return value
  return your function
*/

/*
  Add written explanation of your solution here
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
