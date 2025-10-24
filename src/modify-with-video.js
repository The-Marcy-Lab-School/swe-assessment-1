/*
  DEBUGGING ACTIVITY: Library Book Tracker

  You've been hired by a local library to help debug their book checkout system.

  The code SHOULD:
  1. Keep track of several books and whether they're checked out
  2. Check out a book (set checkedOut to true)
  3. Return a book (set checkedOut to false)
  4. Get a list of all available books

  However, some functionality isn't working correctly.

  YOUR TASKS:
  1. Run this file and observe what happens
  2. Identify 2 bugs in the code
  3. Fix all 2 bugs
  4. Record a 3-4 minute video explaining:
  - What you expected to happen
  - The bugs you found (what's wrong and why)
  - The fixes you implemented

  ADD YOUR LOOM LINK HERE: __________
*/

const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', checkedOut: false },
  { title: '1984', author: 'George Orwell', checkedOut: false },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', checkedOut: false },
  { title: 'Pride and Prejudice', author: 'Jane Austen', checkedOut: false },
];

const checkoutBook = (title) => {
  for (let i = 0; i <= books.length; i++) {
    if (books[i].title === title) {
      books[i].checkedOut = true;
    }
  }
}

const returnBook = (title) => {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === title) {
      books[i].checkedOut = false;
    }
  }
}

const getAvailableBooks = () => {
  const available = [];

  for (let i = 0; i < books.length; i++) {
    if (books[i].checkedOut = false) {
      available.push(books[i].title);
    }
  }

  return available;
}

// ============================================
// Testing the functions
// ============================================

console.log('Initial books:', books);
console.log('Available books:', getAvailableBooks());

checkoutBook('1984');
checkoutBook('The Great Gatsby');
console.log('\nAfter checking out 1984 and The Great Gatsby:');
console.log(books);
console.log('Available books:', getAvailableBooks());

returnBook('1984');
console.log('\nAfter returning 1984:');
console.log(books);
console.log('Available books:', getAvailableBooks());

// ============================================
// Exports
// ============================================

module.exports = {
  books,
  checkoutBook,
  returnBook,
  getAvailableBooks,
};
