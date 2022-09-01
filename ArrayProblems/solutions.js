function oddCouple(nums) {

  // create a new array to be returned
  let oddNums = [];

  // loop through all of the numbers in the given array
  for (let i = 0 ; i < nums.length; i++) {

    // store each number in a variable (optional)
    let currentNum = nums[i];

    // if the currentNum is odd...
    if (currentNum % 2) {

      // ... push it into our oddNums array
      oddNums.push(currentNum);

      // if we've found the first two odd numbers...
      if (oddNums.length === 2) {

        // ...return oddNums now
        return oddNums;
      }
    }
  }

  // return oddNums here; it will either be empty or contain one number
  return oddNums;
}


function myIncludes(array, searchValue) {

  // loop through the entire array
  for (let i = 0; i < array.length; i++) {

    // store each element in a variable (optional)
    let element = array[i];

    // if the element is equal to the value we're searching for...
    if (element === searchValue) {

      // ... return true
      return true;
    }
  }

  /*
    only return false after the for loop is finished, otherwise we may return
    false too soon
  */
  return false;
}


function myLastIndexOf(array, searchValue, startIdx) {

  // if the user hasn't defined a startIdx, set it as the last index in the array
  if (startIdx === undefined) {
    startIdx = array.length - 1;
  }

  // loop through the array, starting at the startIdx
  for (let i = startIdx; i >= 0; i--) {

    // store the element in a variable (optional)
    let element = array[i];

    // if the element is equal to the search value...
    if (element === searchValue) {

      // ... return the current index
      return i;
    }
  }

  // return -1 only after we've finished the for loop
  return -1;
}




function myReverse(originalArray) {
  let reversedArray = [];

  // loop through the original array from back to front
  for (let i = originalArray.length - 1; i >= 0; i--) {

    // store each element in a variable (optional)
    let element = originalArray[i];

    // push each element into the reversedArray
    reversedArray.push(element);
  }

  // return the reversedArray after the for loop
  return reversedArray
}

// alternative solution
function myReverse2(originalArray) {
  let reversedArray = [];

  // while the length of originalArray is greater than 0
  while (originalArray.length) {

    /*
      pop elements off the end of the original array and immediately
      push them into the reversedArray
    */
    reversedArray.push(originalArray.pop())
  }

  return reversedArray
}



function myUnshift(originalArray, value) {

  // create a new array, with the value as the first element
  let newArray = [value];

  // loop through the entire originalArray
  for (let i = 0; i < originalArray.length; i++) {

    // store each element in a variable (optional)
    let element = originalArray[i];

    // push every element into the new array
    newArray.push(element);
  }

  // return the new array after the for loop
  return newArray
}