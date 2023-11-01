# Intro To Node Module Assessment!
- [Intro To Node Module Assessment!](#intro-to-node-module-assessment)
  - [Before You Start](#before-you-start)
- [Short Answers](#short-answers)
- [Question 1: petJudger](#question-1-petjudger)
- [Question 2: loopFromOneUpToAnother](#question-2-loopfromoneuptoanother)
- [Question 3: shoutEveryLetterForLoop](#question-3-shouteveryletterforloop)
- [Question 4: shoutArrayMethod](#question-4-shoutarraymethod)
- [Question 5: generateMultiplesOf5ToNum](#question-5-generatemultiplesof5tonum)
- [Question 6: isLongArray](#question-6-islongarray)
- [Question 7: addToFrontOrBack](#question-7-addtofrontorback)
- [Question 8: replaceMiddleValue](#question-8-replacemiddlevalue)
- [Question 9: getAllXCoordinates](#question-9-getallxcoordinates)
- [Question 10: carMaker](#question-10-carmaker)
- [Question 11: getFavoriteChildName](#question-11-getfavoritechildname)
- [Question 12: getPessimisticTotal](#question-12-getpessimistictotal)
- [Question 13: getNamesOfGreedyGnomes](#question-13-getnamesofgreedygnomes)
- [Question 14: getAllNumbersFromString](#question-14-getallnumbersfromstring)
- [Question 15: DEBUG - fixVariables](#question-15-debug---fixvariables)
- [Question 16: DEBUG - doubleAllItemsPurely,](#question-16-debug---doubleallitemspurely)
- [Question 17: DEBUG - addChildToParentMutation,](#question-17-debug---addchildtoparentmutation)
- [Question 18: obliterate](#question-18-obliterate)

## Before You Start
Hello and welcome to the node assessment! Before we continue, we want to ground you in the fact that the goal of this assignment is to help *you*. This is not about grades, it's about finding out what you know and if you still need help in some areas. Attempt as *many* questions as you can, some code is always better than no code!

Whenever you take an assessment, you may be flustered. The first step is to count 15 seconds. This feels *unbearably* long in the moment and a waste of precious time! But remember, you have thousands and thousands of seconds. You know how each one felt like forever? Then that means you have a ton of time to work. Breathe in and let the adrenaline rush hit you, and then let it subside so you can *focus*.

We recommend reading over all the short answer questions and code prompts before your start working. There may be things you know right off the bat, and filling them out first can help you feel more confident. Nothing here is linear, and everything can be done in whatever order you prefer.

Some other helpful things:

- This is open book, open note, open documentation, open console. Use your resources. Just don't use your neighbor. 😉
- If you're not sure what a question is asking, reach out to an instructor.
- Pay close attention to your spelling and grammar for the short answers.
- Remember, we're looking for clarity and conciseness in the short answers.
- We've provided a `playground.js` file for you to mess around with if you want.
- DO NOT DWELL ON ANY SINGLE QUESTION. If you're stuck, move on and come back to it later.

Good luck everyone and when in doubt, *read the tests*!

# Short Answers
Make sure to do these! In fact, if you do them first, it may help you on some of the coding questions.

# Question 1: petJudger
Write a function `petJudger()` that takes 2 args: a string `petBreed` and a string `petName`. It should log the following:

- If even *one* of those arguments is missing, log: `Please provide a valid pet`
- If the `petBreed` is 'dog' log: `I love dogs! (name) is so cute!`
- If the `petBreed` is 'cat' log: `I love cats! (name) is so cute!`
- If the `petBreed` is 'turtle' log: `Who doesn't love a good turtle? (name) is the tops.`
- If the `petBreed` is 'snake' log: `Not a fan, please take (name) and leave.`
- All other breeds log: `What an...interesting pet.`

# Question 2: loopFromOneUpToAnother
Write a function `loopFromOneUpToAnother()` that takes 2 args: a number `firstNum` and a number `secondNum`. Log out each number, with the first arg being inclusive, and the second arg being exclusive. Use the tests to determine what to do if the numbers are equal or the second is smaller.

# Question 3: shoutEveryLetterForLoop
Using a `for` loop, write a function `shoutEveryLetterForLoop()` that takes a string `str`. It should log each letter capitalized and with a '!' added. Do not use a higher-order method.

```js
shoutEveryLetterForLoop('hey')
// H!
// E!
// Y!
```

There will always be a string, and it will have no spaces or punctuation, but use the tests to see what should happen if it's a blank string ''.

# Question 4: shoutArrayMethod
Alright, now using an array method (no `for` or `while` loops!), write `shoutArrayMethod()`, which should output exactly the same logs as `shoutEveryLetterForLoop()`. Which is the best array method to use?

# Question 5: generateMultiplesOf5ToNum
Using a for loop, write a function `generateMultiplesOf5ToNum()` that takes a number `num`. It should create an array of all multiples of 5 and return that array. You will always get a number. Please read the tests to figure out whether or not `num` should be inclusive and other edge cases.

# Question 6: isLongArray
Write a function `isLongArray()` that takes an array `arr`. If the array is longer than 10 items, return `true`. Otherwise, return `false`.

# Question 7: addToFrontOrBack
Write a function `addToFrontOrBack()` that takes 3 args: an array `arr`, a `value` of any type, and a boolean `isBack`. Insert the `value` as either the first or last value in the `arr`, depending on the boolean `isBack`. An array will always be provided, but it may be empty, check the tests to see what to do. Also, the `value` may not exist. If there is no `value` (undefined or null), return the *original* unaltered array. Ordinarily, the function should have no return value.

# Question 8: replaceMiddleValue
Write a function `replaceMiddleValue()` that takes 2 args: an array `arr` and a `value` of any type. The function should find the middle index of the array and then replace the value there with the input `value`.

Check the tests to see exactly which index should be the "middle." Don't overthink it!

# Question 9: getAllXCoordinates
Write a function `getAllXCoordinates()` that takes an array of coordinate pairs `arrOfCoords`. This function should return a *new* array full of only the `x` coordinates (that is the *first* value in the coordinate arrays). Like this:

```js
// [x, y]
getAllXCoordinates([[1, 2], [3, 4], [5, 6]])
// [1, 3, 5]

// [x, y, z]
getAllXCoordinates([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// [1, 4, 7]
```

# Question 10: carMaker
Write a function `carMaker()` that takes 4 arguments: a string `name`, a string `maker`, a number `year`, and an object `owner`. The function should return an object with 5 properties: `name`, `year`, `maker`, `needsOilChange`, and `owners`. `name`, `year`, and `maker` should match exactly the arguments given. `needsOilChange` should be `false`. And lastly, `owners` should be an array with only one object in it: the *actual* owner that was passed in, not a copy.

# Question 11: getFavoriteChildName
Write a function `getFavoriteChildName()` that takes an object `parent`. The function should return the `name` of the *first* child object in the `parent.children` array. There will *always* be an array, but if it is empty, return `null`.

# Question 12: getPessimisticTotal
Write a function `getPessimisticTotal` that takes in an array `nums`. The function should add of the array numbers up and then round that total down to the nearest integer. We'll say that again: add the floats together to get a total and *then* round down to the nearest integer. The function should return that integer.

There will always be an array, but if it is empty, simply return 0.

# Question 13: getNamesOfGreedyGnomes
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

You must return an array of only the *names* of each greedy garden gnome. Here's the catch, do not use a for loop.

# Question 14: getAllNumbersFromString
Write a function `getAllNumbersFromString` that takes in a string `str`. The function should return an array of all the numbers in the string. If there are no numbers, return an empty array. The returned numbers will be strings, not numbers. Look at these example (note which numbers are split up and which aren't):

```js
expect(getAllNumbersFromString('abc12def3asd45'))
// that would return ['12', '3', '45']);

getAllNumbersFromString('1 fine day 10 bees ate 2 pizza 3.14s')
// that would return ['1', '10', '2', '3', '14']);

getAllNumbersFromString('One fine day ten bees ate two pizza pies')
// that would return []);
```

Check your RegEx notes!

# Question 15: DEBUG - fixVariables
In `debug.js` we have the `fixVariables()` function that's trying to log and return a message, but isn't working. Could you please fix this so the tests pass?

# Question 16: DEBUG - doubleAllItemsPurely,
In `debug.js` we have `doubleAllItemsPurely()`. It's supposed to be pure, but it's not. Can you fix it so the tests pass?

# Question 17: DEBUG - addChildToParentMutation,
Conversely, we have `addChildToParentMutation` which is pure, but *should* mutate the given `parent` object. Can you correct this so the tests pass?

# Question 18: obliterate
If you have attempted all the short answers, all the other `from-scratch.js` functions, *and* the `debug.js` functions, give this a try.

Write a function `obliterate` that takes in an object and removes all of its properties. It should add `wasObliterated` as `true` to the object. It should return nothing.
