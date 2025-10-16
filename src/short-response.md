# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

At the bottom, paste the link to your Loom Recording for Section 4: Complex Debugging + Video.

---

## Debugging Questions

### Question 1:

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

**Your Answer:**
<!-- Write your answer here -->

---

### Question 2:

What does the following code log? Explain why.

```javascript
let bestPlayer = { name: "Lebron James" };
let theGOAT = bestPlayer;
bestPlayer.name = "Michael Jordan";
console.log(theGOAT.name);
```

**Your Answer:**
<!-- Write your answer here -->

---

### Question 3:

What does the following code log? Explain why.

```javascript
const theHustler = 'Laisha';

const shoutOut = () => {
  const theHustler = 'Paul';
  console.log(\`\${theHustler} is the hardest working person in the room.\`);
}

shoutOut();
console.log(\`\${theHustler} is also the hardest working person in the room.\`);
```

**Your Answer:**
<!-- Write your answer here -->

---

## Teaching Questions

### Question 4:

In a few paragraphs, give a brief lesson on the topic of **rest parameters**.

In your lesson, be sure to cover the following:

* What is the purpose of "rest parameters"?  
* How do we use them? Illustrate the use of rest parameters by writing a function called `sum` that takes *any* number of integers as arguments and returns their sum.

```javascript
sum(1, 2, 10); // 13
sum(5); // 5
sum(100, 200, 800, 1, 1, 1); // 1103;
```

**Your Answer:**
<!-- Write your answer here -->

---

### Question 5:

Imagine you are teaching a brand new programmer a brief lesson about **scope**. Your lesson should have the following components:

* A technical definition of scope ("According to MDN, scope is...")  
* An analogy ("You can think of scope like ...")  
* A short code snippet that demonstrates scope (make sure to wrap it in triple backticks)  
* An explanation of your example  

For each section, use clear and concise language. Double check spelling and grammar.

**Your Answer:**
<!-- Write your answer here -->

---

### Question 6:

Imagine you are teaching a brand new programmer a brief lesson about **pure functions**. Your lesson should have the following components:

* A technical definition of pure functions ("According to MDN, a pure function is...")  
* An analogy ("You can think of pure functions like ...")  
* A short code snippet that demonstrates a pure function (make sure to wrap it in triple backticks)  
* An explanation of your example  

For each section, use clear and concise language. Double check spelling and grammar.

**Your Answer:**
<!-- Write your answer here -->

---

## Design Reasoning Questions

### Question 7:

Consider the function `removeLastFrom`. It makes a copy of the input array before popping off the last value and returning the copy:

```javascript
const removeLastFrom = (nums) => {
  const numsCopy = [...nums];
  numsCopy.pop();
  return numsCopy;
}

const fruits = ['apple', 'banana', 'cherry', 'date'];
const fruitsMinusOne = removeLastFrom(fruits);
```

Explain why this function is designed this way. What kind of function is the programmer aiming to create and why? Make sure to include the terms "pass by reference" in your explanation.

**Your Answer:**
<!-- Write your answer here -->

---

### Question 8:

You are a developer on an e-commerce website (like Amazon.com). Your job is to write code that lets users add items to a shopping cart, adjust the quantities of each item, and see a total of all items.

Answer the following questions:

* What data type(s) would you use to represent a single item in the cart? Why?  
* What data type(s) would you use to represent the entire shopping cart that holds those items? Why?  
* Provide a hard-coded example of a `shoppingCart` with multiple items to support your explanation.

**Your Answer:**
<!-- Write your answer here -->

---

## Section 4:

**Paste your Loom video link here:**

<!-- Paste link here -->