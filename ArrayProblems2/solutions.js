function evenAndOdd(originalArray) {
  // create arrays where we'll store even and odd numbers
  let evenNums = [];
  let oddNums = [];

  // loop through the entire original array
  for (let i = 0; i < originalArray.length; i++) {
    // store each number in a variable (optional)
    let num = originalArray[i];

    // if the number is odd...
    if (num % 2) {
      // ...push it into the oddNums array
      oddNums.push(num);
    }

    // else, the number must be even
    else {
      // push the number into the evenNums array
      evenNums.push(num);
    }
  }

  // create and return a new array, with the subarrays at the correct indices
  return [evenNums, oddNums];
}

function arrayFlattener(twoDimensionalArray) {
  // create the array to return at the end of the function
  let flatArray = [];

  // loop through the original twoDimensionalArray
  for (let i = 0; i < twoDimensionalArray.length; i++) {
    // store each element in a variable (optional)
    let element = twoDimensionalArray[i];

    // if the element is an array...
    if (Array.isArray(element)) {
      // loop through the inner array
      for (let j = 0; j < element.length; j++) {
        // store each element from the inner array in a variable (also optional)
        let innerElement = element[j];

        // push each element from the inner array into the flatArray
        flatArray.push(innerElement);
      }
    }

    // else, the element is just a number and can be pushed into flatArray
    else {
      flatArray.push(element);
    }
  }

  // return the flatArray after the for loop
  return flatArray;
}

// alternative solution using concat
function arrayFlattener2(twoDimensionalArray) {
  let flatArray = [];

  for (let i = 0; i < twoDimensionalArray.length; i++) {
    let element = twoDimensionalArray[i];

    // if the element is an array...
    if (Array.isArray(element)) {
      // ...just concat the array onto flatArray
      flatArray = flatArray.concat(element);
    } else {
      flatArray.push(element);
    }
  }

  return flatArray;
}

function zooInventory(zoo) {
  // create a new array to hold the finished sentences
  let sentences = [];

  // loop through the entire zoo array
  for (let i = 0; i < zoo.length; i++) {
    // store the current animal
    let animal = zoo[i];

    // store the name of the current animal
    let name = animal[0];

    // store the species of the current animal
    let species = animal[1][0];

    // store the age of the current animal
    let age = animal[1][1];

    // use string interpolation and our well-named variables to contruct the sentence
    let sentence = `${name} the ${species} is ${age}.`;

    // push the sentence into the sentences array
    sentences.push(sentence);
  }

  // return the sentences array after the for loop
  return sentences;
}

/*
  the alternative solution below doesn't store the values from the zoo array in
  their own variables. although this solution requires fewer lines of code, it
  is much harder to read.
*/

function zooInventory(zoo) {
  let sentences = [];

  for (let i = 0; i < zoo.length; i++) {
    sentences.push(`${zoo[i][0]} the ${zoo[i][1][0]} is ${zoo[i][1][1]}.`);
  }

  return sentences;
}

function makeGrid(numColumns, numRows) {
  let grid = [];

  // each iteration of the outer for loop creates and adds a new row to the grid
  for (let i = 0; i < numRows; i++) {
    // create a new row
    let row = [];

    // each iteration of the inner loop adds a new column/cell to the new row
    for (let j = 0; j < numColumns; j++) {
      // push the correct cell number into the new row
      row.push(j + 1);
    }

    // push the new row into the grid
    grid.push(row);
  }

  // return the finished grid outside of the for loops
  return grid;
}

function removeColumns(grid, numColumns) {
  // loop through every row in the grid
  for (let i = 0; i < grid.length; i++) {
    // for every column to remove...
    for (let j = 0; j < numColumns; j++) {
      // pop one colum/cell off of the current row
      grid[i].pop();
    }
  }
  return grid;
}

function myJoin(array, separator) {
  // if the separator isn't defined, set it as a comma
  if (separator === undefined) {
    separator = ",";
  }

  // create a string value onto which we can concatenate each element from the array
  let joinedString = "";

  // loop through the entire array
  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    // unless this is the first element in the array...
    if (i !== 0) {
      // ...add the separator to the joinedString
      joinedString += separator;
    }

    // if the current element is neither defined nor null...
    if (element !== undefined && element !== null) {
      // ...add the element to the joinedString
      joinedString += element;
    }
  }

  // return the joinedString after the for loop
  return joinedString;
}

function mySlice(originalArray, startIdx, endIdx) {
  // if the startIdx is undefined...
  if (startIdx === undefined) {
    // ...start at the beginning of the original array
    startIdx = 0;
  }

  // if the startIdx is a negative number...
  else if (startIdx < 0) {
    // ...subtract the startIdx from the length of the array to get the correct startIdx
    startIdx = originalArray.length + startIdx;
  }

  // if the endIdx is undefined...
  if (endIdx === undefined) {
    // ...set it at the end of the original array
    endIdx = originalArray.length;
  }

  // if the endIdx is a negative number...
  else if (endIdx < 0) {
    // ...subtract endIdx from the length of the array to get the correct endIdx
    endIdx = originalArray.length + endIdx;
  }

  let arrayCopy = [];

  // loop through originalArray, starting at the startIdx and ending just before the endIdx
  for (let i = startIdx; i < endIdx; i++) {
    // store the element from the originalArray in a variable
    let element = originalArray[i];

    // push the element into the arrayCopy
    arrayCopy.push(element);
  }

  return arrayCopy;
}

/*
  This concise solution takes advantage of a pattern that emerges if you look
  at the expected outputs.
  For example:
    rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]
  The new array can be constructed by taking two slices from the original array.
  The first slice is just the number five, which you can get by slicing the
  original array starting with the -1 idx through the end of the array. The
  second slice is [1, 2, 3, 4], which you can get by slicing the original array
  from the beginning through the -1 idx. In both cases, -1 is -rotateNum.
  Once you have the two slices, concat them in the correct order and return.
*/

function rotateArray(originalArray, rotateNum) {
  let front = originalArray.slice(-rotateNum);
  let end = originalArray.slice(0, -rotateNum);

  return front.concat(end);
}
