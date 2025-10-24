# Mod 1 Assessment - Alternate Version

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
- [Section 2: Coding Fluency](#section-2-coding-fluency)
  - [From Scratch 1: calculateTip](#from-scratch-1-calculatetip)
  - [From Scratch 2: countVowels](#from-scratch-2-countvowels)
  - [From Scratch 3: findLargest](#from-scratch-3-findlargest)
- [Section 3: Simple Debugging](#section-3-simple-debugging)
  - [Debug 1: greetUser](#debug-1-greetuser)
  - [Debug 2: removeFirstItemPurely](#debug-2-removefirstitempurely)
- [Section 4: Complex Debugging + Video](#section-4-complex-debugging--video)
  - [Part 1: Code Analysis (Do this FIRST, before fixing anything)](#part-1-code-analysis-do-this-first-before-fixing-anything)
  - [Part 2: Observe](#part-2-observe)
  - [Part 3: Find and Fix Bugs](#part-3-find-and-fix-bugs)
  - [Part 4: Record Your Video (3-4 minutes)](#part-4-record-your-video-3-4-minutes)

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

**Q: What if I don't finish in 3 hours?**
A: You can request a 1-day extension. Speak with an instructor.

**Q: Do all my tests need to pass?**
A: Not necessarily. Partial credit is awarded based on the rubric. Do your best!

**Q: Can I use Google?**
A: You can use MDN and official documentation, but don't search for solutions to the specific problems. Feel free to use the Marcy GitBook, your own notes, and past assignments.

**Q: What if my video is slightly over the time limit?**
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
3. Answer all 4 questions directly in the markdown file below the text **Your Answer:**
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

Explain the difference between **truthy** and **falsy** values in JavaScript.

In your answer:
* Define what truthy and falsy values are
* List at least 5 falsy values in JavaScript
* Provide a code example that demonstrates how truthy/falsy values work in conditional statements
* Explain why understanding truthy/falsy values is important when writing code

### Question 2

What does the following code log? Explain why.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers;

for (let i = 0; i < doubled.length; i++) {
  doubled[i] = doubled[i] * 2;
}

console.log(numbers);
console.log(doubled);
```

### Question 3

Explain the difference between **parameters** and **arguments**.

In your answer:
* Define what a parameter is
* Define what an argument is
* Provide a code example that clearly labels which parts are parameters and which are arguments
* Explain a common mistake programmers make when confusing these terms

### Question 4

What is a **callback function**?

In your answer:
* Define what a callback function is in your own words
* Explain why callback functions are useful
* Provide a code example showing a function that takes a callback as a parameter and uses it
* Explain what your example does step by step

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

### From Scratch 1: calculateTip

Write a function `calculateTip(billAmount, tipPercentage)` that takes 2 arguments: a number `billAmount` and a number `tipPercentage`. The function should calculate and **return** the tip amount.

The `tipPercentage` is a whole number (e.g., 15 for 15%, 20 for 20%).

If either argument is missing or if either is not a number, return `null`.

Examples:

```js
calculateTip(100, 20); // Returns 20
calculateTip(50, 15); // Returns 7.5
calculateTip(80, 18); // Returns 14.4
calculateTip(100); // Returns null
calculateTip('100', 20); // Returns null
```

### From Scratch 2: countVowels

Write a function `countVowels(str)` that takes 1 argument: a string `str`. The function should **return** the number of vowels (a, e, i, o, u) in the string. Count both uppercase and lowercase vowels.

If an empty string is provided, return `0`.

**You MUST use a `for` loop to solve this problem. Do NOT use higher-order array methods.**

Examples:

```js
countVowels('hello'); // Returns 2
countVowels('JavaScript'); // Returns 3
countVowels('xyz'); // Returns 0
countVowels(''); // Returns 0
countVowels('AEIOU'); // Returns 5
```

### From Scratch 3: findLargest

Write a function `findLargest(numbers)` that takes 1 argument: an array of numbers called `numbers`. The function should **return** the largest number in the array.

If the array is empty, return `null`.

**You MUST use a `for` or `while` loop to solve this problem. Do NOT use `Math.max()` or higher-order array methods.**

Examples:

```js
findLargest([1, 5, 3, 9, 2]); // Returns 9
findLargest([10, 20, 30]); // Returns 30
findLargest([-5, -1, -10]); // Returns -1
findLargest([42]); // Returns 42
findLargest([]); // Returns null
```

---

## Section 3: Simple Debugging

**File:** `src/debug.js`

**Instructions:**
1. Open `src/debug.js`
2. Fix the 2 broken functions
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

### Debug 1: greetUser

In `debug.js` we have the `greetUser(firstName, lastName)` function that should create and return a greeting message, but it has a scope issue.

Can you fix it so the tests pass?

Current Behavior:

```js
greetUser('Jane', 'Doe');
// ReferenceError: greeting is not defined
```

Expected Behavior:

```js
greetUser('Jane', 'Doe');
// Returns "Hello, Jane Doe! Welcome!"
```

### Debug 2: removeFirstItemPurely

In `debug.js` we have `removeFirstItemPurely(arr)` which should take in an array and return a _new array_ with the first item removed. It's supposed to be pure (not mutate the original), but it's not. Can you fix it so the tests pass?

Current Behavior:

```js
const letters = ['a', 'b', 'c'];
const result = removeFirstItemPurely(letters);
console.log(letters);  // ['b', 'c']
console.log(result);   // ['b', 'c']
```

Expected Behavior:

```js
const letters = ['a', 'b', 'c'];
const result = removeFirstItemPurely(letters);
console.log(letters);  // ['a', 'b', 'c']
console.log(result);   // ['b', 'c']
```

---

## Section 4: Complex Debugging + Video

**File:** `src/modify-with-video.js`

**Grading:**

You can earn up to 8 points for this question.
- Bug Identification (2 points): 1 point per bug correctly identified
- Bug Fixes (2 points): 1 point per working fix
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
1. Identify **2 bugs** in the code
2. For each bug, write down:
   - What line it's on
   - What's wrong
   - Why it causes a problem
3. Fix all 2 bugs
4. Run the code again to verify it works:
   ```bash
   node src/modify-with-video.js
   ```

### Part 4: Record Your Video (3-4 minutes)
1. Use **Loom** to record your screen. For instructions on downloading Loom, refer to the [Marcy GitBook](https://marcylabschool.gitbook.io/marcy-lab-school-docs/environment-setup/loom).
   
2. In your video, explain:
   - What you expected the code to do (from Part 1)
   - The 2 bugs you found:
     - Where each bug is
     - What's wrong
     - Why it causes a problem
   - The fixes you implemented

3. Use proper technical vocabulary:
   - ✅ "greater than operator" (not "right arrow")
   - ✅ "assignment operator" (not "equal sign")
   - ✅ "strict equality operator" (not "three equal signs")
   - ✅ "array index", "object property", "loop condition"

4. Keep your video between 3-4 minutes

5. Upload your video and add the link to the comment at the top of `src/modify-with-video.js`
