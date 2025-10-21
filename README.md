# Mod 1 Assessment

**Table of Contents:**
- [Assessment Overview](#assessment-overview)
  - [Setup Instructions](#setup-instructions)
  - [Running Tests \& Linter for Code Style](#running-tests--linter-for-code-style)
  - [Submission Instructions](#submission-instructions)
  - [What Resources Can I Use?](#what-resources-can-i-use)
  - [FAQ](#faq)
  - [Good Luck! 🚀](#good-luck-)
- [Section 1: Short Response](#section-1-short-response)
  - [Question 1](#question-1)
  - [Question 2](#question-2)
  - [Question 3](#question-3)
  - [Question 4](#question-4)
  - [Question 5](#question-5)
  - [Question 6](#question-6)
  - [Question 7](#question-7)
  - [Question 8](#question-8)
- [Section 2: Coding Fluency](#section-2-coding-fluency)
  - [From Scratch 1: petJudger](#from-scratch-1-petjudger)
  - [From Scratch 2: loopFromOneUpToAnother](#from-scratch-2-loopfromoneuptoanother)
  - [From Scratch 3: shoutEveryLetterForLoop](#from-scratch-3-shouteveryletterforloop)
  - [From Scratch 4: letterCaseCounts](#from-scratch-4-lettercasecounts)
  - [From Scratch 5: getNamesOfGreedyGnomes](#from-scratch-5-getnamesofgreedygnomes)
- [Section 3: Simple Debugging](#section-3-simple-debugging)
  - [Debug 1: fixVariables](#debug-1-fixvariables)
  - [Debug 2: doubleAllItemsPurely](#debug-2-doubleallitemspurely)
  - [Debug 3: sumArray](#debug-3-sumarray)
- [Section 4: Complex Debugging + Video](#section-4-complex-debugging--video)
  - [Part 1: Code Analysis (Do this FIRST, before fixing anything)](#part-1-code-analysis-do-this-first-before-fixing-anything)
  - [Part 2: Observe](#part-2-observe)
  - [Part 3: Find and Fix Bugs](#part-3-find-and-fix-bugs)
  - [Part 4: Record Your Video (2-4 minutes)](#part-4-record-your-video-2-4-minutes)

Welcome to your first module assessment! This assessment tests your understanding of JavaScript fundamentals including variables, functions, control flow, loops, arrays, and objects.

## Assessment Overview

The assessment has 4 sections:

1. **Short Response** - Answer questions about JavaScript concepts
2. **Coding Fluency** - Write functions from scratch
3. **Simple Debugging** - Fix broken code
4. **Complex Debugging + Video** - Debug code and record a 2-4 minute video explanation

Your repository contains the following relevant files:

```
mod-1-assessment/
├── README.md                          # This file - your instructions
├── src/
│   ├── short-response.md             # Section 1: Answer questions here
│   ├── from-scratch.js               # Section 2: Write functions here
│   ├── debug.js                      # Section 3: Fix bugs here
│   └── modify-with-video.js          # Section 4: Fix bugs and record video
└── tests/
    ├── from-scratch.test.js          # Tests for Section 2
    └── debug.test.js                 # Tests for Section 3
```

--- 

### Setup Instructions

Clone the Repository

```bash
git clone <repository-url>
cd mod-1-assessment
```

Switch to a `draft` branch

```bash
git checkout -B draft
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

### Running Tests & Linter for Code Style

**Run all tests:**
```bash
npm test
```

**Run tests for a specific section:**
```bash
npm test from-scratch
npm test debug
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

Before submitting your assessment, go through this checklist to ensure you haven't missed any critical details!

**Submission Checklist:**
- [ ] All questions in `src/short-response.md` are answered
- [ ] All functions in `src/from-scratch.js` are written
- [ ] All bugs in `src/debug.js` are fixed
- [ ] All bugs in `src/modify-with-video.js` are fixed
- [ ] Video is recorded and link is added to `src/short-response.md`
- [ ] Run `npm test` - as many tests as possible should pass
- [ ] Run `npm run lint` - fix any errors
- [ ] Remove any `console.log` statements used for debugging
- [ ] Remove any commented-out code

**How to Submit:**

1. Commit your changes:
  
    ```bash
    git add -A
    git commit -m "Complete Mod 1 Assessment"
    ```

2. Push to GitHub:
   
    ```bash
    git push
    ```

3. Create a pull request to merge `draft` into `main` and tag your instructor for review.

4. Submit on Canvas:

   - Submit the link to your pull request on Canvas
   - Double-check that your latest code is visible on the `draft` branch in GitHub

---

### What Resources Can I Use?

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

### FAQ

**Q: Can I use AI tools to check my work?**  
A: Yes, but not for everything. The code that you write and the short response answers you provide must be 100% yours. You cannot provide any AI tool with your code or writing to review and you cannot provide any AI tool with a problem from the assessment to solve. However, you can use AI to support your learning and understanding of key concepts that are mentioned in the assessment. For example, if the assessment mentions scope, you can use Gemini or ChatGPT to help you understand that concept better but you cannot paste the question prompt into these tools to get an answer.

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

Remember:
- Read all instructions carefully before starting
- Don't spend too much time on one question - move on and come back
- Save your work frequently (`git commit` regularly)
- Test your code as you write it

If you have questions about the instructions (not the content), ask an instructor.

## Section 1: Short Response

**File:** `src/short-response.md`

**Instructions:**

1. Open `src/short-response.md`
2. The question prompts are included in the file. 
3. Answer all 8 questions directly in the markdown file below the text **Your Answer:**
4. Use proper markdown formatting:
   - Wrap code in triple backticks (\`\`\`javascript)
   - Use bolded text, backticks for referencing code, headers, lists, and paragraphs as appropriate
5. Check your spelling and grammar
6. Be sure to answer ALL parts of each question

**Grading:** 

You can earn up to 6 points on each question
- Technical Score (3 points): Accuracy, completeness, use of proper terminology
- Writing Quality (3 points): Grammar, spelling, markdown formatting, clarity

For more details, refer to the [Rubric](./rubric.md).

**Tips:**
- Use technical vocabulary (e.g., "block scope", "reference type", "pure function") to receive full credit.
- Explain your reasoning clearly and concisely. It should be easy to understand what point you're making!
- Provide code examples when asked and explain how they relate to your answer afterwards.
- Proofread before submitting.
- Answer the question fully before worrying about perfect wording

### Question 1

The following block of code throws an error. *Without running it:*

* Identify the kind of error it throws  
* Explain why it is thrown.  
* Suggest a fix to avoid the error

```javascript
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

### Question 2

What does the following code log? Explain why.

```javascript
let bestPlayer = { name: "Lebron James" };
let theGOAT = bestPlayer;
bestPlayer.name = "Michael Jordan";
console.log(theGOAT.name);
```

### Question 3

What does the following code log? Explain why.

```javascript
const theHustler = 'Laisha';

const shoutOut = () => {
  const theHustler = 'Paul';
  console.log(`${theHustler} is the hardest working person in the room.`);
}

shoutOut();
console.log(`${theHustler} is also the hardest working person in the room.`);
```

### Question 4

In a few paragraphs, give a brief lesson on the topic of **rest parameters** (look them up if you're not familiar!)

In your lesson, be sure to cover the following:

* What is the purpose of "rest parameters"?  
* How do we turn a parameter into a rest parameter and use them in functions? 
* Illustrate the use of rest parameters by writing a function called `sum` that takes *any* number of integers as arguments and returns their sum.

```javascript
sum(1, 2, 10); // 13
sum(5); // 5
sum(100, 200, 800, 1, 1, 1); // 1103;
```

### Question 5

Imagine you are teaching a brand new programmer a brief lesson about **scope**. Your lesson should have the following components:

* A definition of scope.
* An analogy ("You can think of scope like ...")  
* A short code snippet that demonstrates scope (make sure to wrap it in triple backticks)  
* An explanation of your example  

For each section, use clear and concise language. Double check spelling and grammar.

### Question 6

Imagine you are teaching a brand new programmer a brief lesson about **modules**. Your lesson should have the following components:

* A definition of modules in your own words.
* An explanation of the benefits of using modules in your code.
* An example showing how to export and import modules in Node along with an explanation of the example. 

For each section, use clear and concise language. Double check spelling and grammar.

### Question 7

Consider the function `removeLastPurely`. It is a **pure function**.

```javascript
const removeLastPurely = (arr) => {
  const arr = [...arr];
  arrCopy.pop();
  return arrCopy;
}

const fruits = ['apple', 'banana', 'cherry', 'date'];
const fruitsMinusOne = removeLastFrom(fruits);
```

After this code runs, explain what values will be held by `fruits` and `fruitMinusOne`.

Then, explain why it is necessary to make a copy of the array in order to make it a pure function. 

Finally, explain why we would want to avoid mutating the input array itself (why would we want the function to be pure?).

### Question 8

You are a developer on an e-commerce website (like Amazon.com). Your job is to write code that lets users add items to a shopping cart, adjust the quantities of each item, and see a total of all items.

Answer the following questions:

* What data type(s) would you use to represent a single item in the cart? Why?  
* What data type(s) would you use to represent the entire shopping cart that holds those items? Why?  
* Provide a hard-coded example of a `shoppingCart` with multiple items to support your explanation.

---

## Section 2: Coding Fluency

**File:** `src/from-scratch.js`

**Instructions:**
1. Open `src/from-scratch.js`
2. Write each function according to the specifications listed below
3. Run tests frequently to check your work:
   
  ```bash
  npm test from-scratch
  ```
4. Make sure your code is clean and readable

**Grading:** 

You can earn up to 4 points on each question:
- Algorithm Score (3 points): Does your code pass all tests?
- Code Style (1 point): Clean code with no linting errors, descriptive variable names, no unused code

For more details, refer to the [Rubric](./rubric.md).

**Tips:**
- Read the instructions carefully - pay attention to exact wording
- Test your code frequently
- Use descriptive variable names (not just `x`, `y`, `arr`)
- Read error messages - they tell you what's wrong!
- Remove any commented-out code in your completed solutions before submitting
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

You must return an array of only the *names* of each "greedy" garden gnome.

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

## Section 3: Simple Debugging

**File:** `src/debug.js`

**Instructions:**
1. Open `src/debug.js`
2. Fix the 3 broken functions
3. Run tests to verify your fixes:
   ```bash
   npm test debug
   ```

**Grading**

You can earn up to 1 point on each question.
- 1 point per passing test (auto-graded)

For more details, refer to the [Rubric](./rubric.md).

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

### Debug 3: sumArray

Lastly, we have `sumArray(nums)` which should return a sum of all numbers in the given array.

Can you correct this so the tests pass?

Current Behavior:

```js
sumArray([1,2,3,4,5]);
// returns 0
```

Expected Behavior:

```js
sumArray([1,2,3,4,5])
// returns 15
```

## Section 4: Complex Debugging + Video

**File:** `src/modify-with-video.js`

**Grading:** 

You can earn up to 10 points for this question.
- Bug Identification (3 points): 1 point per bug correctly identified
- Bug Fixes (3 points): 1 point per working fix
- Video Quality (4 points):
  - Technical vocabulary (1 point)
  - Completeness - addresses all parts (1 point)
  - Clarity - easy to follow (1 point)
  - Conciseness - stays within time limit (1 point)

For more details, refer to the [Rubric](./rubric.md).

**Tips:**

- Do the code analysis BEFORE fixing anything - you need to explain what was wrong
- Write down your bugs before recording
- Do a practice run before recording
- Don't rush - clarity is more important than speed
- If you make a mistake, you can re-record!
- It's okay to refer to notes during recording!

### Part 1: Code Analysis (Do this FIRST, before fixing anything)
1. Open `src/modify-with-video.js`
2. Read the code carefully
3. Answer these questions (write them down - you'll need them for your video):
   - What expectations do you have about the program?
   - What is this program supposed to output? 
   - Calculate it by hand if you need to!

### Part 2: Observe
1. Run the code to see what happens:
   ```bash
   node src/modify-with-video.js
   ```
2. Take note of errors and anything that doesn't meet your expectations (write them down - you'll need this for your video)

### Part 3: Find and Fix Bugs
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

### Part 4: Record Your Video (2-4 minutes)
1. Use **Loom** to record your screen. For instructions on downloading Loom, refer to the [Marcy GitBook](https://marcylabschool.gitbook.io/marcy-lab-school-docs/environment-setup/loom).
   
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

5. Upload your video and add the link to the comment at the top of `src/modify-with-video.js`
