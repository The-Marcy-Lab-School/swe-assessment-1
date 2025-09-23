# Mod 1 Assessment!

Hello and welcome to the Mod 1 Assessment! 

Before we begin, we want to ground you in the fact that the goal of this assignment is to help you get a sense of your learning progress. 

**This is not about getting a good grade that will impress your instructor, your parents, or anyone else. It's about finding out what you know and if you still need help in some areas.**

Your instructors will support you no matter the outcome. Like you, they will get to see which areas you need to work on and will support you to close those gaps.

And finally, take a deep breath and notice in your body where you may be holding tension, and let it go! You got this!

**Table of Contents:**
- [Tips Before You Start](#tips-before-you-start)
  - [Asking ChatGPT for Help](#asking-chatgpt-for-help)
- [Setup](#setup)
- [From Scratch Problems:](#from-scratch-problems)
  - [From Scratch 1: petJudger](#from-scratch-1-petjudger)
  - [From Scratch 2: loopFromOneUpToAnother](#from-scratch-2-loopfromoneuptoanother)
  - [From Scratch 3: shoutEveryLetterForLoop](#from-scratch-3-shouteveryletterforloop)
  - [From Scratch 4: shoutArrayMethod](#from-scratch-4-shoutarraymethod)
  - [From Scratch 5: generateMultiplesOf5ToNum](#from-scratch-5-generatemultiplesof5tonum)
  - [From Scratch 6: isLongArray](#from-scratch-6-islongarray)
  - [From Scratch 7: appendOrPrepend](#from-scratch-7-appendorprepend)
  - [From Scratch 8: replaceMiddleValue](#from-scratch-8-replacemiddlevalue)
  - [From Scratch 9: getAllXCoordinates](#from-scratch-9-getallxcoordinates)
  - [From Scratch 10: carMaker](#from-scratch-10-carmaker)
  - [From Scratch 11: getFavoriteChildName](#from-scratch-11-getfavoritechildname)
  - [From Scratch 12: getPessimisticTotal](#from-scratch-12-getpessimistictotal)
  - [From Scratch 13: getNamesOfGreedyGnomes](#from-scratch-13-getnamesofgreedygnomes)
  - [From Scratch 14: obliterate](#from-scratch-14-obliterate)
- [Debug Problems:](#debug-problems)
  - [Debug 15: fixVariables](#debug-15-fixvariables)
  - [Debug 16: doubleAllItemsPurely](#debug-16-doubleallitemspurely)
  - [Debug 17: getUpdatedParent,](#debug-17-getupdatedparent)
  - [(BONUS): From Scratch — getAllNumbersFromString](#bonus-from-scratch--getallnumbersfromstring)

## Tips Before You Start

Attempt as *many* questions as you can, some code is always better than no code!

We recommend reading over all code prompts before your start working. There may be things you know right off the bat, and filling them out first can help you feel more confident. Nothing here is linear, and everything can be done in whatever order you prefer.

Some other helpful things:

- This is open book, open note, open documentation, open console. Use your resources.
- If you're not sure what a question is asking, reach out to an instructor.
- We've provided a `playground.js` file for you to mess around with if you want.
- DO NOT DWELL ON ANY SINGLE QUESTION. If you're stuck, move on and come back to it later.

### Asking ChatGPT for Help

If you’re stuck, you may use ChatGPT to clarify the assignment — but not to solve it for you. To do this, copy the meta-prompt below into ChatGPT along with the assignment question.

> You are acting as a tutor. Your job is to explain what this coding question is asking, clarify confusing wording, and highlight the relevant concepts students need to know — but do not provide the full solution or code that directly answers the question. Instead, focus on rephrasing the problem in simpler terms, identifying what’s being tested, and suggesting what steps or thought processes might help. Ask guiding questions to ensure the student is thinking critically. Do not write the final function, algorithm, or code implementation.

Be mindful of your AI usage on assignments. AI can be a great tool to help your learning but it can also be detrimental if you let it do too much of the thinking for you.

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

Here are some useful commands to remember.

```sh
npm i                   # install dependencies
git checkout -b draft   # switch to the draft branch before starting

npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change

git add -A              # add a changed file to the staging area
git commit -m 'message' # create a commit with the changes
git push                # push the new commit to the remote repo
```

## From Scratch Problems:

The following problems can be completed within the `src/from-scratch.js` file.

The tests for these problems are found within the `tests/from-scratch.spec.js` file.

### From Scratch 1: petJudger

Write a function `petJudger(petBreed, petName)` that takes 2 arguments: a string `petBreed` and a string `petName`. For each It should print the following (pay close attention to capitalization, spacing, and punctuation!):

- If one or both of those arguments are missing, print: `Missing information. Please provide a valid pet.`
- If the `petBreed` is `'dog'` print: `I love dogs! (name) is so cute!`
- If the `petBreed` is `'cat'` print: `I love cats! (name) is so cute!`
- If the `petBreed` is `'turtle'` print: `Who doesn't love a good turtle? (name) is the tops.`
- If the `petBreed` is `'snake'` print: `Not a fan, please take (name) and leave.`
- All other values of `petBreed` print: `What an...interesting pet.`

This function does not need to return anything.

Examples:

```js
petJudger('dog', 'frida'); // Prints "I love dogs! frida is so cute!"
petJudger('panda', 'joe'); // Prints "What an...interesting pet."
petJudger('panda'); // Prints "Missing information. Please provide a valid pet."
```

### From Scratch 2: loopFromOneUpToAnother
Write a function `loopFromOneUpToAnother(firstNum, secondNum)` that takes 2 arguments: a number `firstNum` and a number `secondNum`. print out each number, with the first arg being inclusive, and the second arg being exclusive. Use the tests to determine what to do if the numbers are equal or the second is smaller.

This function does not need to return anything.

Examples:

```js
loopFromOneUpToAnother(1, 5); // Prints on separate lines 1 2 3 4
loopFromOneUpToAnother(5, 10); // Prints on separate lines 5 6 7 8 9
loopFromOneUpToAnother(1, 1); // Prints nothing
loopFromOneUpToAnother(5, 1); // Prints nothing
```

### From Scratch 3: shoutEveryLetterForLoop

Write a function `shoutEveryLetterForLoop(str)` that takes 1 argument: a string `str`. It should print each character in the string on its own line, capitalized, and with an exclamation point`'!'` added.

A string will always be provided as input and it will have no spaces or punctuation. If an empty string is provided, don't print anything. This function does not need to return anything.

Use a `for` loop (**do NOT use a higher-order method.**) to create this function.

Examples:

```js
/* Correct Examples: */
shoutEveryLetterForLoop('hey');
// H!
// E!
// Y!

shoutEveryLetterForLoop('');

/* Incorrect Examples: */
shoutEveryLetterForLoop('hey');
// HEY!

shoutEveryLetterForLoop('hey');
// H!E!Y!
```

Notice how each letter is printed on its own line, not all together.


### From Scratch 4: shoutArrayMethod
Okay, for the function `shoutArrayMethod(str)`, you will write the exact same functionality as the last function, but this time we DO want you to use an array higher order method. Do NOT use a `for` or `while` loop.

This function does not need to return anything.

Examples:

```js
shoutArrayMethod('hey');
// H!
// E!
// Y!

shoutArrayMethod('');
```

### From Scratch 5: generateMultiplesOf5ToNum
Using a `for` loop, write a function `generateMultiplesOf5ToNum(num)` that takes in a number `num`. It should create an array containing all **positive multiples of 5** that are less than or equal to the provided number `num` and return that new array. 

You will always get a number as input and you should always return an array.

Examples:

```js
generateMultiplesOf5ToNum(25); // Returns [5, 10, 15, 20, 25]
generateMultiplesOf5ToNum(24); // Returns [5, 10, 15, 20]
generateMultiplesOf5ToNum(5); // Returns [5]
generateMultiplesOf5ToNum(0); // Returns []
generateMultiplesOf5ToNum(-1); // Returns []
```

### From Scratch 6: isLongArray
Write a function `isLongArray(arr)` that takes an array `arr`. If the array has more than 10 items, return `true`. Otherwise, return `false`.

Examples:

```js
isLongArray([1,2,3,4,5,6,7,8,9,10,11,12]); // Returns true
isLongArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1]); // Returns true
isLongArray([1,2,3,4,5,6,7,8]); // Returns false
```

### From Scratch 7: appendOrPrepend
Write a function `appendOrPrepend(arr, value, addToFront)` that takes 3 arguments: an array `arr`, a value of any type `value`, and a boolean `addToFront`. 

It should behave in the following ways:
* If `addToFront` is `false` insert the provided `value` at the end of the array (a.k.a "append")
* If `addToFront` is `true`, insert the provided `value` at the front of the array (a.k.a "prepend")
* If `value` is `undefined` or `null`, do not modify the array.
* Return the provided array

Examples:
```js
const nums = [1, 2, 3, 4]
appendOrPrepend(nums, 0, true); // prepend 0 to nums
console.log(nums); // Prints [0, 1, 2, 3, 4]

const letters = ['a', 'b', 'c']
appendOrPrepend(letters, 'd'); // append 'd' to letters
console.log(letters); // Prints ['a', 'b', 'c', 'd']

const fruits = ['apple', 'banana', 'cherry']
appendOrPrepend(fruits, null, true); // do nothing when inserting null or undefined values
console.log(fruits); // Prints ['apple', 'banana', 'cherry']
```

### From Scratch 8: replaceMiddleValue
Write a function `replaceMiddleValue(arr, value)` that takes 2 arguments: an array `arr` and a value of any type `value`. The function should find the middle index of the array and then replace the value there with the input `value`.

Examples:
```js
const arr1 = [1, 2, 3, 4, 5];
replaceMiddleValue(arr1, 6);
console.log(arr1); // Prints [1, 2, 6, 4, 5]

const arr2 = [1, 2, 3];
replaceMiddleValue(arr2, 0);
console.log(arr2); // Prints [1, 0, 3]

const arr3 = ['a', 'b', 'c', 'd'];
replaceMiddleValue(arr3, 'z');
console.log(arr3); // Prints ['a', 'b', 'z', 'd']

const arr4 = [];
replaceMiddleValue(arr4, 1);
console.log(arr4); // Prints [1]
```

### From Scratch 9: getAllXCoordinates
Write a function `getAllXCoordinates(arrOfCoords)` that takes an array of arrays called `arrOfCoords`. The provided array `arrOfCoords` will hold arrays, each holding a pair or a trio of coordinates.

```js
const xyCoords = [[1, 2], [3, 4], [5, 6]]
const xyzCoords = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

This function should return a *new* array full of only the `x` coordinates (that is the *first* value in the inner coordinate arrays). 

Examples:

```js
// [x, y] coords
const coords1 = [[1, 2], [3, 4], [5, 6]];
const xCoords1 = getAllXCoordinates(coords1);
console.log(xCoords1); // Prints [1, 3, 5]

// [x, y, z] coords
const coords2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const xCoords2 = getAllXCoordinates(coords2)
console.log(xCoords2); // Prints [1, 4, 7]
```

### From Scratch 10: carMaker
Write a function `carMaker(model, maker, year, owner)` that takes 4 arguments: a string `model`, a string `maker`, a number `year`, and an object `owner`. The function should return an object with 5 properties: 
* `model` - the provided `model` value
* `year` - the provided `year` value
* `maker` - the provided `maker` value
* `owners` - an array with only one object in it: the `owner` object that was passed in.
* `needsOilChange` - the value `false`

Examples:

```js
const car = carMaker('Beetle', 'Volkswagen', 1990, { name: 'Ron' });
console.log(car);
/*
{
  model: 'Beetle',
  maker: 'Volkswagen',
  year: 1990,
  owners: [{ name: 'Ron' }]
  needsOilChange: false
}
*/
```

### From Scratch 11: getFavoriteChildName
Write a function `getFavoriteChildName(parent)` that takes an object `parent`. The function should return the `name` of the *first* child object in the `parent.children` array. There will *always* be an array, but if it is empty, return `null`.

Examples:

```js
const parent1 = {
  name: 'Maya',
  children: [
    { name: 'Carmen' },
    { name: 'Reuben' },
    { name: 'Gonzalo' },
  ],
};

getFavoriteChildName(parent1); // Returns 'Carmen'

const parent2 = {
  name: 'Reuben',
  children: [],
};
getFavoriteChildName(parent2); // Returns null
```

### From Scratch 12: getPessimisticTotal
Write a function `getPessimisticTotal(nums)` that takes in an array `nums`. The function should add of the array numbers up and then round that total down to the nearest integer. The function should return that integer.

There will always be an array, but if it is empty, simply return 0.

Examples:

```js
getPessimisticTotal([1, 2, 3, 4, 5.1]); // Returns 15
getPessimisticTotal([5.5, 5.5]); // Returns 11
getPessimisticTotal([1.2, 1.2, 1.2, 1.2, 1.2]); // Returns 6
getPessimisticTotal([1.9]); // Returns 1
getPessimisticTotal([1]); // Returns 1
getPessimisticTotal([0]); // Returns 0
getPessimisticTotal([]); // Returns 0
```

### From Scratch 13: getNamesOfGreedyGnomes
Write a function `getNamesOfGreedyGnomes(gnomes)` that takes in an array `gnomes` of garden gnome objects. Each gnome looks like this:

```js
{
  name: 'Garbeldel',
  gardenCount: 2,
  age: 407,
  stolenDecorations: ['chair', 'water fountain'],
}
```

A gnome is considered "greedy" if it has stolen *more than* one decoration.

You must return an array of only the *names* of each "greedy" garden gnome. To get full points, **do not use a `for` loop**.

If the provided array of `gnomes` is empty, return an empty array.

Examples:

```js
const gnomes = [
  {
    name: 'Garbeldel',
    gardenCount: 2,
    age: 407,
    stolenDecorations: ['chair', 'fountain', 'statue'],
  },
  {
    name: 'Farbus',
    gardenCount: 3,
    age: 281,
    stolenDecorations: ['greek statue'],
  },
  {
    name: 'Peekle',
    gardenCount: 3,
    age: 101,
    stolenDecorations: [],
  },
  {
    name: 'Jorbles',
    gardenCount: 3,
    age: 900,
    stolenDecorations: ['wind chimes', 'mini golfer'],
  },
];

getNamesOfGreedyGnomes(gnomes); // Returns ['Garbeldel', 'Jorbles']

getNamesOfGreedyGnomes([]); // Returns []
```

### From Scratch 14: obliterate

Write a function `obliterate(obj)` that takes in an object `obj` and removes all of its properties. It should add `wasObliterated` as `true` to the object. It should return nothing.

Examples:
```js
const obj1 = { a: 1, b: 2, c: 3 };
obliterate(obj1);
console.log(obj); // Prints { wasObliterated: true };
```

## Debug Problems:

The following problems can be completed within the `src/debug.js` file.

The tests for these problems are found within the `tests/debug.spec.js` file.

### Debug 15: fixVariables
In `debug.js` we have the `fixVariables(temp)` function that's trying to print and return a message, but isn't working. 

Could you please fix this so the tests pass?

### Debug 16: doubleAllItemsPurely

In `debug.js` we have `doubleAllItemsPurely(arr)` which should take in an array and return a _new array_ with the all of the values of the input array doubled. It's supposed to be pure, but it's not. Can you fix it so the tests pass?

Current Behavior:

```js
const nums = [1,2,3];
const doubled = doubleAllItemsPurely(nums)
console.log(nums);    // [2, 4, 6]
console.log(doubled); // [2, 4, 6]
```

Expected Behavior:

```js
const nums = [1,2,3];
const doubled = doubleAllItemsPurely(nums)
console.log(nums);    // [1, 2, 3]
console.log(doubled); // [2, 4, 6]
```

### Debug 17: getUpdatedParent,
Lastly, we have `getUpdatedParent(parent, child)` which should NOT mutate the provided `parent` object. 

Currently, it is making a "shallow clone" of the `parent` object using the spread operator `{ ...parent }` which takes the values of the `parent` object and puts those values into a new object `{}`. It then adds the provided `child` to the clone's `children` array,m however it is also mutating the `children` array in the original provided `parent`. We need to instead make a "deep clone".

Use the resources below to create a `deepClone` of the `parent` object before adding the provided `child` to the clone's `children` array:
* Watch this video: https://www.youtube.com/watch?v=WLuEXwQiqac&t=103s
* Read this article: https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone

Can you correct this so the tests pass?

Current Behavior:

```js
const parent = {
  name: 'Tom',
  children: [],
};

const updatedParent = getUpdatedParent(parent, "Itzel");

console.log(updatedParent);
/* 
The updated parent is changed
{
  name: 'Tom',
  children: [ "Itzel" ],
};
*/

console.log(parent);
/* 
The original parent is changed too
{
  name: 'Tom',
  children: [ "Itzel" ],
};
*/
```

Expected Behavior:

```js
const parent = {
  name: 'Tom',
  children: [],
};

const updatedParent = getUpdatedParent(parent, "Itzel");

console.log(updatedParent);
/* 
The updated parent is changed
{
  name: 'Tom',
  children: [ "Itzel" ],
};
*/

console.log(parent);
/* 
The original parent is NOT changed
{
  name: 'Tom',
  children: [],
};
*/
```

### (BONUS): From Scratch — getAllNumbersFromString

If you are done, try out this bonus problem. To test your code, go to `tests/from-scratch.spec.js` and remove `.skip` from `it.skip` on the very last test.

Write a function `getAllNumbersFromString` that takes in a string `str`. Using regular expressions, the function should return an array of all the numbers in the string. If there are no numbers, return an empty array. The returned numbers will be strings, not numbers. 

Example (note which numbers are split up and which aren't):

```js
expect(getAllNumbersFromString('abc12def3asd45'))
// that would return ['12', '3', '45']);

getAllNumbersFromString('1 fine day 10 bees ate 2 pizza 3.14s')
// that would return ['1', '10', '2', '3', '14']);

getAllNumbersFromString('One fine day ten bees ate two pizza pies')
// that would return []);
```

Check your RegEx notes!