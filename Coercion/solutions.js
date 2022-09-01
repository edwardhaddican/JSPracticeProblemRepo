

function howEqual(value1, value2) {

  // use === to check if the values are strictly equal
  if (value1 === value2) {
    return 'strictly';
  }

  // use == to check if the values are loosely equal
  else if (value1 == value2) {
    return 'loosely';
  }

  // else, the values must not be equal
  else {
    return 'not equal';
  }
}

/*
  The alternative solution below takes advantage of the the fact that the return
  keyword stops the execution of the function, which makes the else clauses
  unnecessary. Arguably, the code is more readable with the else clauses, so
  it's totally reasonable to use them even if they aren't technically required.
*/

function howEqual2(value1, value2) {
  if (value1 === value2) {
    return 'strictly';
  }

  if (value1 == value2) {
    return 'loosely';
  }

  return 'not equal';
}
isTruthy

function isTruthy(value) {

  // if the value can be coerced to true, it's truthy!
  if (!!value) {
    return "it's truthy, entirely truthy, and nothing but truthy";
  }

  if (value === false) {
    return 'The boolean value false is falsey';
  }

  if (value === null) {
    return 'The null value is falsey';
  }

  if (value === 0) {
    return 'The number 0 is falsey (the only falsey number)';
  }

  if (value === '') {
    return 'The empty string is falsey (the only falsey string)';
  }

  return 'undefined is falsey';
}
onlyOne

function onlyOne(value1, value2, value3) {

  // if only the first value is truthy, return true
  if (!!value1 && !value2 && !value3) {
    return true;
  }

  // if only the second value is truthy, return truy
  if (!value1 && !!value2 && !value3) {
    return true;
  }

  // if only the third value is truthy, return true
  if (!value1 && !value2 && !!value3) {
    return true;
  }

  // in any other case, return false
  return false;
}

/*
  this alternative solution combines the three if statements into one. this also
  works and is DRYer than the first solution. but it is arguably a little harder
  to read!
*/

function onlyOne2(value1, value2, value3) {
  if (
      (!!value1 && !value2 && !value3) ||
      (!value1 && !!value2 && !value3) ||
      (!value1 && !value2 && !!value3)
  ) {
    return true;
  }

  return false;
}
myOr, myAnd

function myOr(value1, value2, value3) {

  // if and of the values are truthy, return true

  if (!!value1) {
    return true;
  }

  if (!!value2) {
    return true;
  }

  if (!!value3) {
    return true;
  }

  // otherwise, return false

  return false;
}

function myAnd(value1, value2, value3) {

  // if and of the values are falsey, return false

  if (!value1) {
    return false;
  }

  if (!value2) {
    return false;
  }

  if (!value3) {
    return false;
  }

  // otherwise, return true

  return true;
}
// Hardyharrbucks Coffee

// First solution:

function averageCupsSold(firstStore, secondStore, thirdStore){
  let cupsOne, cupsTwo, cupsThree;

  if (!firstStore && firstStore !== 0) { // this will be true when firstStore is falsy but not 0
    cupsOne = 10
  } else {
    cupsOne = firstStore
  }

  if (!secondStore && secondStore !== 0) { // this will be true when secondStore is falsy but not 0
    cupsTwo = 10
  } else {
    cupsTwo = secondStore
  }

  if (!thirdStore && thirdStore !== 0) { // this will be true when thirdStore is falsy but not 0
    cupsThree = 10
  } else {
    cupsThree = thirdStore
  }

  return (cupsOne + cupsTwo + cupsThree) / 3;
}
// Second solution

// write a utility function to calculate cups sold by location
function cupsForStore(store) {
  if (!store && store !== 0) {
    return 10
  } else {
    return store
  }
}

function averageCupsSold(firstStore, secondStore, thirdStore){
  // allocate variables for calculations
  let cupsOne = cupsForStore(firstStore)
  let cupsTwo = cupsForStore(secondStore)
  let cupsThree = cupsForStore(thirdStore)

  // assign values to cupsOne, cupsTwo, and cupsThree based on
  // firstStore, secondStore, and thirdStore

  return (cupsOne + cupsTwo + cupsThree) / 3
}
//calculator

function calculator(valueOne, valueTwo, operation) {
  // first let's make sure that valueOne and valueTwo are numbers
  // here we need an or, because if either isn't a number, we can't proceed
  // this is the same as !(typeof valueOne == "number" && typeof valueTwo == "number)
  if (typeof valueOne !== "number" || typeof valueTwo !== "number") {
    return null // we can return early to avoid doing unncessary work
  }

  if (operation == "add") {
    return valueOne + valueTwo
  } else if (operation == "subtract") {
    return valueOne - valueTwo
  } else if (operation == "multiply") {
    return valueOne * valueTwo
  } else if (operation == "divide" && valueTwo !== 0) {
    return valueOne / valueTwo
  } else {
    return null // we got here if operation isn't in the list, or we tried to divide by 0
  }
}