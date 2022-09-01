// Define a function, onlyOdds, that accepts a number as an argument. onlyOdds should should return the sum of all the odd numbers between 1 and the given number.

// If onlyOdds receives an argument less than 1, it should return 0.

// onlyOdds(6); // => 9 (5 + 3 + 1)


// Crazy Caps
// Define a function, crazyCaps, that accepts a string as an argument. crazyCaps should return a string in which every other character is capitalized. The first letter should be lower-cased.

// crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!




// Bacteria Time
// Define a function, bacteriaTime, that accepts two arguments:

// currentNum (number) - number of starting bacteria
// targetNum (number) - desired number of bacteria
// Assuming that the number of bacteria doubles every 20 minutes, bacteriaTime should return the number of minutes required for the number of bacteria to grow from currentNum to a number equal to or larger than targetNum.

// You can assume that currentNum will be a positive integer. If targetNum is smaller than currentNum, return the string 'targetNum must be larger than currentNum'.

// bacteriaTime(1, 8); // => 60



// Exponentiate
// Write a function exponentiate that accepts two arguments:

// base (number)
// power (number)
// exponentiate should return the result of raising the base by the power. Assume that power will always be an integer greater than or equal to zero. Don't forget that any number raised to the 0th power is equal to 1!

// Do not use the built-in Math.pow() method or Javascript's built-in exponentiation operator but feel free to use them moving forward!

// exponentiate(2, 2)    // => 4
// exponentiate(3, 4)    // => 81





// My Slice
// Write a function mySlice that accepts up to three arguments:

// originalString (string)
// startIdx (number, optional)
// endIdx (number, optional)
// mySlice should return a string. The returned string should be a copy of the original string. If the user defines a startIdx, the returned string should start at that index:

// mySlice('slice and dice', 2)    // => ice and dice
// If the user defined an endIdx, the returned string should end at the last index before the endIdx:

// mySlice('slice and dice', 2, 5)    // => ice
// If the user doesn't define either the startIdx or the endIdx, return the entire originalString:

// mySlice('slice and dice')    // => slice and dice
// You can assume that startIdx will always be less than or equal to endIdx.

// Do not use the built in .slice string method. Feel free to use it in all future workshop problems, though!






// My Index Of
// Define a function, myIndexOf, that accepts three arguments:

// source (string)
// searchValue (string)
// startIdx (number, optional)
// If the source contains the searchValue, return the index at which the searchValue starts. If the searchValue appears more than once in the source, return the index from the first occurrence of the searchValue. If the searchValue doesn't exist in the source, return -1.

// If a startIdx is passed into the function, ignore any instances of the searchValue that occur before startIdx. If no startIdx is provided, start searching from the beginning of the source.

// Hint: Javascript's .slice string method may be useful here.

// Do not use the built-in .indexOf string method in your answer. Feel free to use it in all future workshop problems though!

// myIndexOf('hello', 'h'); // => 0
// myIndexOf('hello', 'e'); // => 1
// myIndexOf('hello', 'l'); // => 2
// myIndexOf('hello', 'l'); // => 2
// myIndexOf('hello', 'o'); // => 4

// myIndexOf('twice twice', 'ice'); => 2

// // find the index of the first instance of 'ice' starting at index 5.
// myIndexOf('twice twice', 'ice', 5); => 8

// myIndexOf('happy string', 'sad'); => -1





// Most Vowels
// Define a function, mostVowels, that accepts one argument, a string of words.

// mostVowels should return the word that has the most vowels.

// mostVowels('I am a keeper with some real rhythms'); // => keeper
// If none of the words have any vowels, return an empty string.

// mostVowels('try my gym'); // => ''


