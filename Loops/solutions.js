// Only Odd Solution

function onlyOdds(num) {
  let sum = 0;

  // start the loop at num, end the loop at 1, decrementing by 1
  for (let i = num; i >= 1; i--) {

    // if i is an odd number...
    if (i % 2 === 1) {

      // ...add it to the sum
      sum += i;
    }
  }

  // return the sum after the for loop is finished
  return sum;
}

// alternate solution that uses a while loop and a helper function
function onlyOdds2(num) {
  let sum = 0;

  // keep looping until num is 1
  while (num >= 1) {

    // pass the num into isOdd, which will return true if num is odd
    if (isOdd(num)) {
      sum += num;
    }

    // don't forget to decrement num or we'll have an infinite loop
    num--;
  }

  return sum;

  // our helper function takes a number a returns true if the number is odd
  function isOdd(num) {
    return num % 2 === 1;
  }
}


// CRAZY CAPS Solution

function crazyCaps(originalString) {
  // create an empty string; we'll concatenate characters onto this string
  let crazyString = '';

  // loop through the original string
  for (let i = 0; i < originalString.length; i++) {

    // store the character in a variable (optional)
    let char = originalString[i];

    // if the index is even...
    if (i % 2 === 0) {

      // ...just concatenate the character onto crazyString
      crazyString += char;
    }

    // else, the index must be odd
    else {

      // uppercase the char
      char = char.toUpperCase();

      // concat the uppercased char onto crazyString
      crazyString += char;
    }
  }

  // return crazyString after the for loop is finished
  return crazyString;
}

// Bacteria Time Solution

function bacteriaTime(currentNum, targetNum) {

  // check the validity of the targetNum input first
  if (targetNum < currentNum) {
    return 'targetNum must be larger than currentNum'
  }

  let numMinutes = 0;

  // if the currentNum is less than the target...
  while (currentNum < targetNum) {

    // ...double the number of bacteria
    currentNum *= 2;

    // add another 20 minutes
    numMinutes += 20;
  }

  // if we're out of the while loop, currentNum must be >= targetNum
  return numMinutes;
}


// Exponentiate

function exponentiate(base, power) {
  // start result at 1. if power is zero, result will not be changed
  let result = 1;

  for (let i = 0; i < power; i++) {
    // multiply the result by the base for 'power' number of times
    result *= base;
  }

  return result;
}

// alternate solution with a while loop
function exponentiate(base, power) {
  if (power === 0) {
    return 1;
  }

  let result = base;

  while (power > 1) {
    result *= base;
    power--;
  }

  return result;
}

// My slice 

function mySlice(originalString, startIdx, endIdx) {

  // if both startIdx and endIdx are undefined, return the original string
  if(startIdx === undefined && endIdx === undefined){
    return originalString;
  }

  // if startIdx was not passed into the function, give it a default value of 0, pointing to the first character in the string
  if (startIdx === undefined) {
    startIdx = 0;
  }

  // if endIdx was not passed into the function, give it a default value as the length of the string
  if (endIdx === undefined) {
    endIdx = originalString.length;
  }

  // will concatenate characters onto slicedString before returning it
  let slicedString = '';

  // use the startIdx and endIdx as the start and end of the loop
  for (let i = startIdx; i < endIdx; i++) {

    // store the current character in a variable (optional)
    let char = originalString[i];

    // concatenate the character onto slicedString
    slicedString += char;
  }

  // return slicedString after the for loop
  return slicedString;
}

// My Index Of 

function myIndexOf(source, searchValue, startIdx) {

  // if user didn't pass in startIdx, define it by default as 0
  if (startIdx === undefined) {
    startIdx = 0;
  }

  /*
    This for loop is tricky to set up!
    Here's the approach: given a source 'Loopy Luna' and a searchValue 'Luna',
    we're going to loop through the source, looking at every substring that's the
    same length as the searchValue:
    Loop
    oopy
    opy
    py L
    ... and so on
    Then we compare each of these substrings to the searchValue. If they match,
    we've found what we're looking for!
    'Luna' is the last substring of length 4 that we could get from the source.
    It doesn't make sense to check any more substrings after Luna, since they would
    would be of length less than 4 (which means they definitely won't match the
    searchValue). That's why our stop condition in the for loop stops the iteration
    before we get to the end of the source string.
  */
  for (let i = startIdx; i <= source.length - searchValue.length; i++) {

    // get a substring from the source, starting at i, with the same length as the search value
    let substring = source.slice(i, i + searchValue.length);

    // if the substring matches the search value...
    if (substring === searchValue) {

      // ...return the current index
      return i;
    }
  }

  // if we get past the end of the for loop, we never found a match and can return -1
  return -1;
}

// alternate solution that uses ES6 default parameters to handle startIdx
function myIndexOf2(source, searchValue, startIdx=0) {
  for (let i = startIdx; i <= source.length - searchValue.length; i++) {
    let substring = source.slice(i, i + searchValue.length);

    if (substring === searchValue) {
      return i;
    }
  }

  return -1;
}

// Most Vowels

function mostVowels(sentence) {
  let currentWord = '';
  let currentVowelCount = 0;

  let maxWord = '';
  let maxVowelCount = 0;

  // loop through the entire sentence, character by character
  for (let i = 0; i < sentence.length; i++) {

    // save the current character in a variable (optional)
    let char = sentence[i];

    // if the current character isn't a space and we're not at the end of the sentence...
    if (char !== ' ' && i !== sentence.length - 1) {

      // ...then we're in the middle of a word. concat the char onto the currentWord
      currentWord += char;

      // if the char is a vowel...
      if (isVowel(char)) {

        // ...increment the count of vowels for the current word
        currentVowelCount += 1;
      }
    }

    // else, char is a space, or we're at the end of the sentence. either way we just finished a word.
    else {

      // if the vowel count for the just-finished word is greater than the max previously found...
      if (currentVowelCount > maxVowelCount) {

        // ...reassign maxVowelCount to the new max
        maxVowelCount = currentVowelCount;

        // reassign maxVowel to the new word with the most vowels
        maxWord = currentWord;
      }

      // reset the currentWord and currentVowelCount values for the next word
      currentWord = '';
      currentVowelCount = 0;
    }
  }

  // return the maxWord after the for loop is finished
  return maxWord;

  // isVowel is a helper function that takes a char and returns true if the char is a vowel
  function isVowel(char) {
    let vowels = 'aeiouAEIOU';

    if (vowels.indexOf(char) >= 0) {
      return true;
    }
    else {
      return false;
    }
  }
}