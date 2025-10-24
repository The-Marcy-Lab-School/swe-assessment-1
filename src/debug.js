/*
  Fix the bugs in the following functions!

  Read the comments to understand what each function should do.
  Run the tests to see what's failing.
  Fix the code to make all tests pass.
*/

// ============================================
// Question 1: greetUser
// ============================================
// This function should return a greeting message

const greetUser = (firstName, lastName) => {
  if (firstName && lastName) {
    const greeting = `Hello, ${firstName} ${lastName}! Welcome!`;
  } else {
    const greeting = 'Hello, Guest! Welcome!';
  }
  return greeting;
};

// ============================================
// Question 2: removeFirstItemPurely
// ============================================
// This function should return a NEW array with the first item removed
// It should NOT mutate the original array

const removeFirstItemPurely = (arr) => {
  arr.shift();
  return arr;
};

// ============================================
// Exports
// ============================================

module.exports = {
  greetUser,
  removeFirstItemPurely,
};
