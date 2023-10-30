function isPalindrome(word) {
  // Write your algorithm here
  word = word.replace(/[^a-z]/g, '').toLowerCase();


  const reversedWord = word.split('').reverse().join('');


  return word === reversedWord;
}

/* 
  Add your pseudocode here
  function isPalindrome(word):
    # Remove all non-alphabetical characters and convert them to lowercase
    word = word.replace(/[^a-z]/g, '').toLowerCase()
    # Initialize a variable to store the reversed word
    reversedWord = ""
    # Loop through the characters of the word in reverse order
    for i from length(word) - 1 down to 0:
        # Append the current character to the reversedWord
        reversedWord += word[i]
    # Compare the original word with the reversed word
    if word == reversedWord:
        return true
    else:
        return false
*/

/*
  Add written explanation of your solution here
  Function Definition: The function isPalindrome(word) is defined, taking one argument, word, which is the input string to be checked for palindromic properties.

Preprocessing the Input:

word = word.replace(/[^a-z]/g, '').toLowerCase(): This line preprocesses the input string to make it suitable for palindrome checking. It removes any characters that are not lowercase letters using a regular expression (i.e., non-alphabet characters are discarded), and it converts the remaining characters to lowercase. This ensures that the comparison is case-insensitive and that only lowercase letters are considered.
Initialize Reversed Word:

reversedWord = "": Here, an empty string called reversedWord is initialized. This variable will be used to store the reversed version of the original input word.
Reverse the Word:

for i from length(word) - 1 down to 0: This loop iterates through the characters of the original word in reverse order. It starts from the last character (at index length(word) - 1) and goes down to the first character (at index 0).

reversedWord += word[i]: Inside the loop, each character of the original word is appended to the reversedWord. This process effectively reverses the original word. By the end of the loop, reversedWord will contain the original word reversed.

Check for Palindrome:

if word == reversedWord: After reversing the word, the code checks whether the original word and the reversed word are identical. If they are the same, it means the input is a palindrome because it reads the same forwards and backwards.
Return the Result:

If the comparison in the previous step is true (i.e., the input word is a palindrome), the function returns true, indicating that the input is a palindrome. Otherwise, it returns false, indicating that the input is not a palindrome.
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
