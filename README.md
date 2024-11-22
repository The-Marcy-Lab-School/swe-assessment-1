# Mod 1 Assessment!

- [Before You Start](#before-you-start)
- [Set Up Your Repository](#set-up-your-repository)
- [Debug Problems:](#debug-problems)
  - [Debug 1: fixVariables](#debug-1-fixvariables)
  - [Debug 2: doubleAllItemsPurely,](#debug-2-doubleallitemspurely)
  - [Debug 3: addChildToParentMutation,](#debug-3-addchildtoparentmutation)
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
  - [From Scratch 18 (BONUS): getAllNumbersFromString](#from-scratch-18-bonus-getallnumbersfromstring)

## Before You Start
Hello and welcome to the Mod 1 Assessment! Before we continue, we want to ground you in the fact that the goal of this assignment is to help *you*. This is not about grades, it's about finding out what you know and if you still need help in some areas. Attempt as *many* questions as you can, some code is always better than no code!

Whenever you take an assessment, you may be flustered. The first step is to count 15 seconds. This feels *unbearably* long in the moment and a waste of precious time! But remember, you have thousands and thousands of seconds. You know how each one felt like forever? Then that means you have a ton of time to work. Breathe in and let the adrenaline rush hit you, and then let it subside so you can *focus*.

We recommend reading over all code prompts before your start working. There may be things you know right off the bat, and filling them out first can help you feel more confident. Nothing here is linear, and everything can be done in whatever order you prefer.

Some other helpful things:

- This is open book, open note, open documentation, open console. Use your resources (not AI).
- If you're not sure what a question is asking, reach out to an instructor.
- We've provided a `playground.js` file for you to mess around with if you want.
- DO NOT DWELL ON ANY SINGLE QUESTION. If you're stuck, move on and come back to it later.

Good luck everyone and when in doubt, *read the tests*!

## Set Up Your Repository

Before starting, run the following commands to install dependencies and create your draft branch.

```
npm i 
git checkout -b draft
```

When you are done, push your commits to the `draft` branch of GitHub and create a pull request. For a refresher on this process, check out the [Marcy Docs on how to submit an assignment](https://marcylabschool.gitbook.io/marcy-lab-school-docs/fullstack-curriculum/how-tos/working-with-assignments#how-to-work-on-assignments).

## Debug Problems:

The following problems can be completed within the `src/debug.js` file.

The tests for these problems are found within the `tests/debug.spec.js` file.

### Debug 1: fixVariables
In `debug.js` we have the `fixVariables()` function that's trying to log and return a message, but isn't working. 

Could you please fix this so the tests pass?

### Debug 2: doubleAllItemsPurely,

In `debug.js` we have `doubleAllItemsPurely()` which should take in an array and return a _new array_ with the all of the values of the input array doubled. It's supposed to be pure, but it's not. Can you fix it so the tests pass?

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

### Debug 3: addChildToParentMutation,
Conversely, we have `addChildToParentMutation` which *should* mutate the given `parent` object. 

Currently, it is making a "deep clone" of the `parent` object using `JSON.stringify` and `JSON.parse` and then adding the `child` to the clone's `children` array, thus keeping the `parent` unaffected. This is a cool technique for copying an object that helps us make a pure function, but it isn't what we want here. We DO want it to mutate the `parent` object.

This function should just take in a `parent` object and a `child` and push that `child` into the `parent` object's `children` array. 

It should also return the modified `parent`.

Can you correct this so the tests pass?

Current Behavior:

```js
const child = { name: 'Itzel' };
const parent = {
  name: 'Tom',
  children: [],
};

addChildToParentMutation(parent, child);
console.log(parent);
/* 
Currently, there is no change to parent, its a pure function
{
  name: 'Tom',
  children: [],
};
*/
```

Expected Behavior:

```js
const child = { name: 'Itzel' };
const parent = {
  name: 'Tom',
  children: [],
};

addChildToParentMutation(parent, child);
console.log(parent);
/* 
We should see parent be changed
{
  name: 'Tom',
  children: [
    { name: 'Itzel' }
  ],
};
*/
```

## From Scratch Problems:

The following problems can be completed within the `src/from-scratch.js` file.

The tests for these problems are found within the `tests/from-scratch.spec.js` file.

### From Scratch 1: petJudger

Write a function `petJudger()` that takes 2 args: a string `petBreed` and a string `petName`. It should log the following:

- If even *one* of those arguments is missing, log: `Please provide a valid pet`
- If the `petBreed` is `'dog'` log: `I love dogs! (name) is so cute!`
- If the `petBreed` is `'cat'` log: `I love cats! (name) is so cute!`
- If the `petBreed` is `'turtle'` log: `Who doesn't love a good turtle? (name) is the tops.`
- If the `petBreed` is `'snake'` log: `Not a fan, please take (name) and leave.`
- All other values of `petBreed` log: `What an...interesting pet.`

This function does not need to return anything.

Example:

```js
petJudger('dog', 'frida'); // Prints "I love dogs! frida is so cute!"
petJudger('panda', 'joe'); // Prints "What an...interesting pet."
```

### From Scratch 2: loopFromOneUpToAnother
Write a function `loopFromOneUpToAnother()` that takes 2 args: a number `firstNum` and a number `secondNum`. Log out each number, with the first arg being inclusive, and the second arg being exclusive. Use the tests to determine what to do if the numbers are equal or the second is smaller.

This function does not need to return anything.

Example:

```js
loopFromOneUpToAnother(1, 5); // Prints on separate lines 1 2 3 4
loopFromOneUpToAnother(5, 10); // Prints on separate lines 5 6 7 8 9
loopFromOneUpToAnother(1, 1); // Prints nothing
loopFromOneUpToAnother(5, 1); // Prints nothing
```

### From Scratch 3: shoutEveryLetterForLoop

Using a `for` loop, write a function `shoutEveryLetterForLoop()` that takes a string `str`. It should log each letter capitalized and with a '!' added. Do not use a higher-order method.

A string will always be provided as input and it will have no spaces or punctuation. If an empty string is provided, don't print anything.

This function does not need to return anything.

Example:

```js
shoutEveryLetterForLoop('hey');
// H!
// E!
// Y!

shoutEveryLetterForLoop('');
```


### From Scratch 4: shoutArrayMethod
Alright, without using a `for` or `while` loop, use an **array higher-order method** to write `shoutArrayMethod()` which should output exactly the same logs as `shoutEveryLetterForLoop()`.

This function does not need to return anything.

Example:

```js
shoutArrayMethod('hey');
// H!
// E!
// Y!

shoutArrayMethod('');
```

### From Scratch 5: generateMultiplesOf5ToNum
Using a `for` loop, write a function `generateMultiplesOf5ToNum()` that takes a number `num`. It should create an array of all multiples of 5 in the given range and return that array. You will always get a number as input and you should always return an array.

```js
generateMultiplesOf5ToNum(25); // Returns [5, 10, 15, 20, 25]
generateMultiplesOf5ToNum(24); // Returns [5, 10, 15, 20]
generateMultiplesOf5ToNum(5); // Returns [5]
generateMultiplesOf5ToNum(0); // Returns []
generateMultiplesOf5ToNum(-1); // Returns []
```

### From Scratch 6: isLongArray
Write a function `isLongArray()` that takes an array `arr`. If the array is longer than 10 items, return `true`. Otherwise, return `false`.

Example:
```js
isLongArray([1,2,3,4,5,6,7,8,9,10,11,12]); // Returns true
isLongArray([1,1,1,1,1,1,1,1,1,1,1,1,1,1]); // Returns true
isLongArray([1,2,3,4,5,6,7,8]); // Returns false
```

### From Scratch 7: appendOrPrepend
Write a function `appendOrPrepend()` that takes 3 args: an array `arr`, a `value` of any type, and a boolean `addToFront`. It should behave in the following ways:
* If `addToFront` is `true`, insert `value` at the front of the array (a.k.a "prepend"), otherwise insert `value` at the end of the array (a.k.a "append")
* If `value` is `undefined` or `null`, do not modify the array.
* Return the provided array

Example:
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
Write a function `replaceMiddleValue()` that takes 2 args: an array `arr` and a `value` of any type. The function should find the middle index of the array and then replace the value there with the input `value`.

Example:
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
Write a function `getAllXCoordinates()` that takes an array of arrays called `arrOfCoords`. The given array `arrOfCoords` will hold arrays, each holding a pair or a trio of coordinates.

```js
const xyCoords = [[1, 2], [3, 4], [5, 6]]
const xyzCoords = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

This function should return a *new* array full of only the `x` coordinates (that is the *first* value in the inner coordinate arrays). 

Example:

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
Write a function `carMaker()` that takes 4 arguments: a string `model`, a string `maker`, a number `year`, and an object `owner`. The function should return an object with 5 properties: 
* `model` - the provided `model` value
* `year` - the provided `year` value
* `maker` - the provided `maker` value
* `owners` - an array with only one object in it: the `owner` object that was passed in.
* `needsOilChange` - the value `false`

Example:

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
Write a function `getFavoriteChildName()` that takes an object `parent`. The function should return the `name` of the *first* child object in the `parent.children` array. There will *always* be an array, but if it is empty, return `null`.

Example:

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
Write a function `getPessimisticTotal` that takes in an array `nums`. The function should add of the array numbers up and then round that total down to the nearest integer. The function should return that integer.

There will always be an array, but if it is empty, simply return 0.

Example:

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
Write a function `getNamesOfGreedyGnomes` that takes in an array `gnomes` of garden gnome objects. Each gnome looks like this:

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

Example:

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

Write a function `obliterate` that takes in an object and removes all of its properties. It should add `wasObliterated` as `true` to the object. It should return nothing.

Example:
```js
const obj1 = { a: 1, b: 2, c: 3 };
obliterate(obj1);
console.log(obj); // Prints { wasObliterated: true };
```

### From Scratch 18 (BONUS): getAllNumbersFromString

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
