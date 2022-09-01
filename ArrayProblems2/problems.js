// Even and Odd
// Define a function, evenAndOdd, that accepts an array.

// evenAndOdd should return a new array containing two smaller arrays. The first element in the new array should be an array with all of the even numbers from the original array. The second element in the new array should be an array with all of the odd numbers from the original array.

// evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]




// Array Flattener
// Define a function, arrayFlattener, that accepts a two-dimensional array as an argument.

// arrayFlattener should return a new, one-dimensional array.

// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]



// Zoo Inventory
// Define a function, zooInventory, that accepts a multi-dimensional array of animal facts.

// zooInventory should return a new, flat array of strings. Each element in the new array should be a sentence about each of the animals in the zoo.

// Hint: nested for-loops are not necessary to complete this problem. This would be a great time to use template literals, also known as string interpolation.

// let myZoo = [
//   ['King Kong', ['gorilla', 42]],
//   ['Nemo', ['fish', 5]],
//   ['Punxsutawney Phil', ['groundhog', 11]]
// ];

// zooInventory(myZoo);
// /* => ['King Kong the gorilla is 42.',
//        'Nemo the fish is 5.'
//        'Punxsutawney Phil the groundhog is 11.']
// */



// Make Grid
// Write a function makeGrid that accepts two arguments:

// numColumns (number) - how many columns we want our grid to have
// numRows (number) - how many rows we want our grid to have
// makeGrid should return a two-dimensional array that represents a grid of the given dimensions.

// makeGrid(3,4);
// /* => [[1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3]]
// */



// Remove Columns
// Write a function removeColumns that accepts two arguments:

// originalGrid (two-dimensional array)
// numColums (number)
// removeColumns should return a new grid with the correct number of columns removed.

// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
// /* => [[1],
//        [1],
//        [1],
//        [1]]
// */



// My Join
// Define a function, myJoin, that accepts up to two arguments:

// array
// separator (string, optional)
// myJoin should return a string with all of the elements from the array joined together. The separator should separate the joined elements:

// myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
// myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"
// If separator is undefined, use ',' as the default separator.

// myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"
// If any elements in the array are undefined or null, they should be replaced with an empty string in the returned string.

// myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"
// Do not use the built-in .join array method in your answer. Feel free to use it in all future problems though!





// My Slice
// Define a function, mySlice, that accepts up to three arguments:

// originalArray (array)
// startIdx (number, optional)
// endIdx (number, optional)
// mySlice should return a copy of the original array. The copy should include all of the elements from originalArray, starting at and including the startIdx, up through and excluding the endIdx.

// mySlice([1, 2, 3], 1, 2) // => [2]
// If endIdx is undefined, include all the indices starting at and including the startIdx through the end of the original array.

// mySlice([1, 2, 3], 1) // => [2, 3]
// If startIdx is undefined, return a copy of the original array.

// mySlice([1, 2, 3]) // => [1, 2, 3]
// startIdx and endIdx can be negative numbers, in which case they count indices from the back of the array.

// mySlice([1, 2, 3], -1) // => [3]
// Do not use the built-in .slice array method in your answer. Feel free to use it in all future problems though!





// Rotate Array
// Define a function, rotateArray, that accepts two arguments:

// originalArray (array)
// rotateNum (number)
// If rotateNum is positive, rotate should return a copy of the original array rotated to the right by the rotateNum `of indices.

// rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]
// If rotateNum is negative, rotate should return a copy of the original array rotated to the left by the rotateNum of indices.

// rotate([1, 2, 3, 4, 5], -1) // => [2, 3, 4, 5, 1]
// If rotateNum is 0, rotate should return a copy of the original array without rotating it.

// rotate([1, 2, 3, 4, 5], 0) // => [1, 2, 3, 4, 5]
// You can assume the absolute value of rotateNum will be less than the length of the original array.



