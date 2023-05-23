# Intro To Node Module Assessment!
- [Intro To Node Module Assessment!](#intro-to-node-module-assessment)
  - [Before You Start](#before-you-start)
- [Question 1: petJudger](#question-1-petjudger)
- [Question 2: loopFromOneUpToAnother](#question-2-loopfromoneuptoanother)
- [Question 3: shoutEveryLetter](#question-3-shouteveryletter)
- [Question 4: generateMultiplesOf5ToNum](#question-4-generatemultiplesof5tonum)
- [Question 5: isLongArray](#question-5-islongarray)
- [Question 6: addToFrontOrBack](#question-6-addtofrontorback)
- [Question 7: replaceMiddleValue](#question-7-replacemiddlevalue)
- [Question 8: getAllXCoordinates](#question-8-getallxcoordinates)
- [Question 9: carMaker](#question-9-carmaker)
- [Question 10: getFavoriteChildName](#question-10-getfavoritechildname)
- [Question 11: DEBUG - fixVariables](#question-11-debug---fixvariables)
- [Question 12: DEBUG - doubleAllItemsPurely,](#question-12-debug---doubleallitemspurely)
- [Question 13: DEBUG - addChildToParentMutation,](#question-13-debug---addchildtoparentmutation)
- [Question 14: obliterate](#question-14-obliterate)

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

Good luck everyone and when in doubt, *read the tests*!


# Question 1: petJudger
Write a function `petJudger()` that takes 2 args: a string `petBreed` and a string `petName`. It should log the following:

- If even *one* of those arguments is missing, log: Please provide a valid pet
- If the `petBreed` is 'dog' log: I love dogs! (name) is so cute!
- If the `petBreed` is 'cat' log: I love cats! (name) is so cute!
- If the `petBreed` is 'turtle' log: Who doesn't love a good turtle? (name) is the tops.
- If the `petBreed` is 'snake' log: Not a fan, please take (name) and leave.
- All other breeds: What an...interesting pet.

# Question 2: loopFromOneUpToAnother
Write a function `loopFromOneUpToAnother()` that takes 2 args: a number `firstNum` and a number `secondNum`. Log out each number, with the first arg being inclusive, and the second arg being exclusive. Use the tests to determine what to do if the numbers are equal or the second is smaller.

# Question 3: shoutEveryLetter
Write a function `shoutEveryLetter()` that takes a string `str`. It should log each letter capitalized and with a '!' added.

```js
shoutEveryLetter('hey')
// H!
// E!
// Y!
```

There will always be a string, and it will have no spaces or punctuation, but use the tests to see what should happen if it's a blank string ''.

# Question 4: generateMultiplesOf5ToNum
Write a function `generateMultiplesOf5ToNum()` that takes a number `num`. It should create an array of all multiples of 5 and return that array. You will always get a number, but please read the tests to figure out the edge cases and whether or not `num` should be inclusive.

# Question 5: isLongArray
Write a function `isLongArray()` that takes an array `arr`. If the array is longer than 10 items, return `true`. Otherwise, return `false`.

# Question 6: addToFrontOrBack
Write a function `addToFrontOrBack()` that takes 3 args: an array `arr`, a `value` of any type, and a boolean `isBack`. Insert the `value` as either the first or last value in the `arr`, depending on the boolean `isBack`. An array will always be provided, but it may be empty, check the tests to see what to do. Also, the `value` may not exist. If there is no `value` (undefined or null), return the *original* unaltered array. Ordinarily, the function should have no return value.

# Question 7: replaceMiddleValue
Write a function `replaceMiddleValue()` that takes 2 args: an array `arr` and a `value` of any type. The function should find the middle index of the array and then replace the value there.

Check the tests to see exactly which index should be the "middle." Don't overthink it!

# Question 8: getAllXCoordinates
Write a function `getAllXCoordinates()` that takes an array of coordinate pairs `arrOfCoords`. This function should return a *new* array full of only the `x` coordinates (that is the *first* value in the coordinate arrays). Like this:

```js
// [x, y]
getAllXCoordinates([[1, 2], [3, 4], [5, 6]])
// [1, 3, 5]

// [x, y, z]
getAllXCoordinates([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// [1, 4, 7]
```

# Question 9: carMaker
Write a function `carMaker()` that takes 4 arguments: a string `name`, a string `maker`, a number `year`, and an object `owner`. The function should return an object with 5 properties: `name`, `year`, `maker`, `needsOilChange`, and `owners`. `name`, `year`, and `maker` should match exactly the arguments given. `needsOilChange` should be `false`. And lastly, `owners` should be an array with only one object in it: the *actual* owner that was passed in, not a copy.

# Question 10: getFavoriteChildName
Write a function `getFavoriteChildName()` that takes an object `parent`. The function should return the `name` of the *first* child object in the `parent.children` array. There will *always* be an array, but if it is empty, return `null` instead of the string name.

Before continuing, try some of the short answer questions too!

# Question 11: DEBUG - fixVariables
In `debug.js` we have the `fixVariables()` function that's trying to log and return a message, but isn't working. Could you please fix this so the tests pass?

# Question 12: DEBUG - doubleAllItemsPurely,
In `debug.js` we have `doubleAllItemsPurely()`. It's supposed to be pure, but it's not. Can you fix it so the tests pass?

# Question 13: DEBUG - addChildToParentMutation,
Conversely, we have `addChildToParentMutation` which is pure, but *should* mutate the given `parent` object. Can you correct this so the tests pass?

# Question 14: obliterate
If you have attempted all the short answers, all the other `from-scratch.js` functions, *and* the `debug.js` functions, give this a try.

Write a function `obliterate` that takes in an object and removes all of its properties. It should add `wasObliterated` as `true` to the object. It should return nothing.