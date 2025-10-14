# Mod 1 Assessment

**Table of Contents:**
- [Assessment Overview](#assessment-overview)
  - [Sections:](#sections)
  - [Assessment Structure](#assessment-structure)
  - [Setup Instructions](#setup-instructions)
  - [Running Tests](#running-tests)
  - [Submission Instructions](#submission-instructions)
  - [Getting Help](#getting-help)
  - [Assessment Tips](#assessment-tips)
    - [General:](#general)
    - [For Short Response:](#for-short-response)
    - [For Coding:](#for-coding)
    - [For the Video:](#for-the-video)
  - [FAQ](#faq)
  - [Good Luck! 🚀](#good-luck-)
- [Section 1: Short Response (48 points)](#section-1-short-response-48-points)
  - [Short Response Question 1](#short-response-question-1)
  - [Short Response Question 2](#short-response-question-2)
  - [Short Response Question 3](#short-response-question-3)
  - [Short Response Question 4](#short-response-question-4)
  - [Short Response Question 5](#short-response-question-5)
  - [Short Response Question 6](#short-response-question-6)
  - [Short Response Question 7](#short-response-question-7)
  - [Short Response Question 8](#short-response-question-8)
- [Section 2: Coding Fluency (24 points)](#section-2-coding-fluency-24-points)
  - [From Scratch 1: petJudger](#from-scratch-1-petjudger)
  - [From Scratch 2: loopFromOneUpToAnother](#from-scratch-2-loopfromoneuptoanother)
  - [From Scratch 3: shoutEveryLetterForLoop](#from-scratch-3-shouteveryletterforloop)
  - [From Scratch 4: letterCaseCounts](#from-scratch-4-lettercasecounts)
  - [From Scratch 5: getNamesOfGreedyGnomes](#from-scratch-5-getnamesofgreedygnomes)
- [Section 3: Simple Debugging (3 points)](#section-3-simple-debugging-3-points)
  - [Debug 1: fixVariables](#debug-1-fixvariables)
  - [Debug 2: doubleAllItemsPurely](#debug-2-doubleallitemspurely)
  - [Debug 3: getUpdatedParent](#debug-3-getupdatedparent)
- [Section 4: Complex Debugging + Video (10 points)](#section-4-complex-debugging--video-10-points)
  - [Part 1: Code Analysis (Do this FIRST, before fixing anything)](#part-1-code-analysis-do-this-first-before-fixing-anything)
  - [Part 2: Find and Fix Bugs](#part-2-find-and-fix-bugs)
  - [Part 3: Record Your Video (2-4 minutes)](#part-3-record-your-video-2-4-minutes)

Welcome to your first module assessment! This assessment tests your understanding of JavaScript fundamentals including variables, functions, control flow, loops, arrays, and objects.

## Assessment Overview

**Total Time:** 6 hours  
**Total Points:** 85 points  
**Passing Requirements:** You must pass this assessment to continue in the program. Retakes are available if needed.

### Sections:

1. **Short Response** (48 points) - Answer questions about JavaScript concepts
2. **Coding Fluency** (24 points) - Write functions from scratch
3. **Simple Debugging** (3 points) - Fix broken code
4. **Complex Debugging + Video** (10 points) - Debug code and record a 2-4 minute video explanation

You have **6 hours total**. Here's a suggested breakdown to manage your time:

- **Section 1 (Short Response):** 2.5 hours
- **Section 2 (Coding Fluency):** 2 hours
- **Section 3 (Simple Debugging):** 30 minutes
- **Section 4 (Complex Debugging + Video):** 1 hour

**Remember:** These are suggestions. Adjust based on your strengths!

--- 

### Assessment Structure

Your repository contains the following files:

```
mod-1-assessment/
├── README.md                          # This file - your instructions
├── package.json                       # Node package configuration
├── .eslintrc.json                     # Linting rules
├── short-response.md                  # Section 1: Answer questions here
├── src/
│   ├── from-scratch.js               # Section 2: Write functions here
│   ├── debug.js                      # Section 3: Fix bugs here
│   └── modify-with-video.js          # Section 4: Fix bugs and record video
└── tests/
    ├── from-scratch.test.js          # Tests for Section 2
    ├── debug.test.js                 # Tests for Section 3
    └── modify-with-video.test.js     # Tests for Section 4
```

--- 

### Setup Instructions

Clone the Repository

```bash
git clone <repository-url>
cd mod-1-assessment
```

Install Dependencies

```bash
npm install
```

Verify Setup

Run the test suite to make sure everything is working:

```bash
npm test
```

You should see tests running (most will fail initially - that's expected!).

--- 

### Running Tests

**Run all tests:**
```bash
npm test
```

**Run tests for a specific section:**
```bash
npm test from-scratch
npm test debug
npm test modify-with-video
```

**Run tests in watch mode (re-runs on file changes):**
```bash
npm test -- --watch
```

**Check for linting errors:**
```bash
npm run lint
```

---

### Submission Instructions

**Submission Checklist:**
- [ ] All questions in `short-response.md` are answered
- [ ] All functions in `src/from-scratch.js` are written
- [ ] All bugs in `src/debug.js` are fixed
- [ ] All bugs in `src/modify-with-video.js` are fixed
- [ ] Video is recorded and link is added to `short-response.md`
- [ ] Run `npm test` - as many tests as possible should pass
- [ ] Run `npm run lint` - fix any errors
- [ ] Remove any `console.log` statements used for debugging
- [ ] Remove any commented-out code

**How to Submit:**

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Complete Mod 1 Assessment"
   ```

2. Push to GitHub:
   ```bash
   git push origin main
   ```

3. Submit on Canvas:
   - Submit the link to your GitHub repository
   - Double-check that your latest code is visible on GitHub

---

### Getting Help

**Allowed Resources:**
- ✅ MDN Documentation
- ✅ Your notes from class
- ✅ Previous assignments and labs
- ✅ Running code in Node to test ideas

**NOT Allowed:**
- ❌ AI tools (ChatGPT, Claude, Copilot, etc.)
- ❌ Asking classmates for help
- ❌ Searching for solutions online
- ❌ Posting questions on Stack Overflow, Reddit, etc.

**If You're Stuck:**
- Read the error messages carefully
- Check the test files to understand what's expected
- Use `console.log()` to debug your code
- Take a break and come back with fresh eyes
- Remember: struggling is part of learning!

---

### Assessment Tips

#### General:
- Read all instructions carefully before starting
- Don't spend too much time on one question - move on and come back
- Save your work frequently (`git commit` regularly)
- Test your code as you write it

#### For Short Response:
- Answer the question fully before worrying about perfect wording
- Use examples to illustrate your points
- Proofread at the end

#### For Coding:
- Start with the easiest problems first
- Get something working, then refine it
- Read error messages - they tell you what's wrong!
- Comment out code that's not working so tests can still run

#### For the Video:
- Write down what you want to say first
- Do a practice run before recording
- Speak clearly and at a moderate pace
- It's okay to refer to notes during recording!

---

### FAQ

**Q: Can I use AI tools to check my work?**  
A: No. This assessment must be completed independently without AI assistance.

**Q: What if I don't finish in 6 hours?**  
A: You can request a 1-day extension. Speak with an instructor.

**Q: Do all my tests need to pass?**  
A: Not necessarily. Partial credit is awarded based on the rubric. Do your best!

**Q: Can I use Google?**  
A: You can use MDN and official documentation, but don't search for solutions to the specific problems. Feel free to use the Marcy GitBook, your own notes, and past assignments.

**Q: What if my video is slightly over 4 minutes?**  
A: A few seconds over is fine. Just avoid excessive rambling.

**Q: Can I resubmit if I'm not happy with my score?**  
A: Talk to your instructor about retake options.

--- 

### Good Luck! 🚀

If you have questions about the instructions (not the content), ask an instructor.

## Section 1: Short Response (48 points)

**File:** `short-response.md`

**Instructions:**
1. Open `short-response.md`
2. Answer all 8 questions directly in the markdown file
3. Use proper markdown formatting:
   - Wrap code in triple backticks (\`\`\`javascript)
   - Use headers, lists, and paragraphs as appropriate
4. Check your spelling and grammar
5. Be sure to answer ALL parts of each question

**Grading:** You can earn up to 6 points on each question
- Technical Score (3 points): Accuracy, completeness, proper terminology
- Writing Quality (3 points): Grammar, spelling, markdown formatting, clarity

**Tips:**
- Use technical vocabulary (e.g., "block scope", "pass by reference", "pure function")
- Provide code examples when asked
- Explain your reasoning clearly
- Proofread before submitting

### Short Response Question 1

The following block of code throws an error. *Without running it:*
  
  - Identify the kind of error it throws
  - Explain why it is thrown.
  - Suggest a fix to avoid the error
  
  ```js
  const react = (isReuben) => {
  	if (isReuben) {
  	  let currentStatus = 'Everything is just fine';
  	} else {
  	  let currentStatus = 'Time to panic.'
  	}
  	
  	console.log(currentStatus);
  }
  
  react(true);
  ```
    
### Short Response Question 2

What does the following code log? Explain why. Avoid running it at first to test your understanding!

```js
let bestPlayer = { name: "Lebron James" };
let theGOAT = bestPlayer;
bestPlayer.name = "Michael Jordan";
console.log(theGOAT.name);
```

### Short Response Question 3

What does the following code log? Explain why.
    
```js
const theHustler = 'Laisha';

const shoutOut = () => {
  const theHustler = `Paul`;
  console.log(`${theHustler} is the hardest working person in the room.`);
}

shoutOut();
console.log(`${theHustler} is also the hardest working person in the room.`);
```

### Short Response Question 4

In a few paragraphs, give a brief lesson on the topic of **rest parameters** (look them up if you are unfamiliar). 
    
In your lesson, be sure to cover the following:

- What is the purpose of “rest parameters” ?
- How do we use them? Illustrate the use of rest parameters by writing a function called `sum` that takes *any* number of integers as arguments and returns their sum.
- Make sure to explain the example afterwards
    
  ```js
  sum(1, 2, 10); // 13
  sum(5); // 5
  sum(100, 200, 800, 1, 1, 1); // 1103;
  ```
    

### Short Response Question 5

Imagine you are teaching a brand new programmer a brief lesson about **scope**. Your lesson should have the following components:
- A technical definition of scope ("According to MDN, scope is...")
- An analogy ("You can think of scope like ...")
- A short code snippet that demonstrates scope (make sure to wrap it in triple backticks)
- An explanation of your example

For each section, use clear and concise language. Double check spelling and grammar.
    
### Short Response Question 6

Imagine you are teaching a brand new programmer a brief lesson about **pure functions**. Your lesson should have the following components:

- A technical definition of pure functions ("According to MDN, a pure function is...")
- An analogy ("You can think of pure functions like ...")
- A short code snippet that demonstrates a pure function (make sure to wrap it in triple backticks)
- An explanation of your example

For each section, use clear and concise language. Double check spelling and grammar.    

### Short Response Question 7

Consider the function `removeLastFrom`, it makes a copy of the input array before popping off the last value and returning the copy:
    
```js
const removeLastFrom = (nums) => {
  const numsCopy = [...nums];
  numsCopy.pop();
  return numsCopy;
}

const fruits = ['apple', 'banana', 'cherry', 'date'];
const fruitsMinusOne = removeLastFrom(fruits);
```

Explain why this function is designed this way. What is the programmer aiming to avoid? Make sure to include the terms “pass-by-reference” and “pure function” in your explanation.
    
### Short Response Question 8

You are a developer on an e-commerce website (like Amazon.com). Your job is to write code that lets users add items to a shopping cart, adjust the quantities of each item, and see a total of all items.
    
Answer the following questions:

- What data type(s) would you use to represent a single item in the cart? Why?
- What data type(s) would you use to represent the entire shopping cart that holds those items? Why?
- Provide a hard-code example of a `shoppingCart` with multiple items and to support your explanation.

--- 
## Section 2: Coding Fluency (24 points)

**File:** `src/from-scratch.js`

**Instructions:**
1. Open `src/from-scratch.js`
2. Write 6 functions according to the specifications in the file
3. Run tests frequently to check your work:
   
  ```bash
  npm test from-scratch
  ```
4. Make sure your code is clean and readable

**Grading:** You can earn up to 4 points on each question:
- **Algorithm Score (3 points):** Does your code pass all tests?
- **Code Style (1 point):** Clean code with no linting errors, descriptive variable names, no unused code

**Tips:**
- Read the instructions carefully - pay attention to exact wording
- Test your code frequently
- Use descriptive variable names (not just `x`, `y`, `arr`)
- Remove any commented-out code before submitting
- Run the linter to check for style issues:
  
  ```bash
  npm run lint
  ```

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

### From Scratch 4: letterCaseCounts

Write a function that takes a string, and returns an object containing the following three properties:
- The number of characters in the string that are lowercase letters
- The number of characters that are uppercase letters
- The number of characters that are neither

You may assume that the string will always contain at least one character.

```js
letterCaseCounts('abCdef 123');
// { lowercase: 5, uppercase: 1, neither: 4 }

letterCaseCounts('AbCd +Ef');
// { lowercase: 3, uppercase: 3, neither: 2 }

letterCaseCounts('123');
// { lowercase: 0, uppercase: 0, neither: 3 }
```

### From Scratch 5: getNamesOfGreedyGnomes
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

## Section 3: Simple Debugging (3 points)

**File:** `src/debug.js`

**Instructions:**
1. Open `src/debug.js`
2. Fix the 3 broken functions
3. Run tests to verify your fixes:
   ```bash
   npm test debug
   ```

**Grading:** You can earn up to 1 point on each question.
- **1 point per passing test** (auto-graded)

**Tips:**
- Read the comments in the file - they explain what's wrong
- The fixes are usually small (1-3 lines changed)
- Make sure you understand WHY the code was broken
- Test after each fix

### Debug 1: fixVariables
In `debug.js` we have the `fixVariables(temp)` function that's trying to print and return a message, but isn't working. 

Could you please fix this so the tests pass?

### Debug 2: doubleAllItemsPurely

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

### Debug 3: getUpdatedParent

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

## Section 4: Complex Debugging + Video (10 points)

**File:** `src/modify-with-video.js`

**Grading:** You can earn up to 10 points for this question.
- Bug Identification (3 points): 1 point per bug correctly identified
- Bug Fixes (3 points): 1 point per working fix
- Video Quality (4 points):
  - Technical vocabulary (1 point)
  - Completeness - addresses all parts (1 point)
  - Clarity - easy to follow (1 point)
  - Conciseness - stays within time limit (1 point)

**Tips:**
- Do the code analysis BEFORE fixing anything - you need to explain what was wrong
- Write down your bugs before recording
- Practice what you'll say before recording
- Don't rush - clarity is more important than speed
- If you make a mistake, you can re-record!

### Part 1: Code Analysis (Do this FIRST, before fixing anything)
1. Open `src/modify-with-video.js`
2. Read the code carefully
3. Run the code to see what happens:
   ```bash
   node src/modify-with-video.js
   ```
4. Answer these questions (write them down - you'll need them for your video):
   - What do you expect `console.log(players)` to print?
   - What does it actually print?
   - What do you expect `console.log(getTopScorer())` to print?
   - What does it actually print?

### Part 2: Find and Fix Bugs
1. Identify **3 bugs** in the code
2. For each bug, write down:
   - What line it's on
   - What's wrong
   - Why it causes a problem
3. Fix all 3 bugs
4. Run the code again to verify it works:
   ```bash
   node src/modify-with-video.js
   ```
5. Run the tests:
   ```bash
   npm test modify-with-video
   ```

### Part 3: Record Your Video (2-4 minutes)
1. Use **Loom** or **Zoom** to record your screen
2. In your video, explain:
   - What you expected the code to do (from Part 1)
   - The 3 bugs you found:
     - Where each bug is
     - What's wrong
     - Why it causes a problem
   - The fixes you implemented
3. Use proper technical vocabulary:
   - ✅ "greater than operator" (not "right arrow")
   - ✅ "assignment operator" (not "equal sign")
   - ✅ "strict equality operator" (not "three equal signs")
   - ✅ "array index", "object property", "loop condition"
4. Keep your video between 2-4 minutes
5. Upload your video and add the link to `short-response.md` (there's a section for it)
