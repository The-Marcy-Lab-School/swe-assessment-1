const path = require('path');
const ScoreCounter = require('score-tests');
const {
  greetUser,
  removeFirstItemPurely,
} = require('../src/debug');

const testSuiteName = 'Debug Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('greetUser - returns correct greeting with both names', () => {
    expect(greetUser('Jane', 'Doe')).toBe('Hello, Jane Doe! Welcome!');
    expect(greetUser('John', 'Smith')).toBe('Hello, John Smith! Welcome!');
    expect(greetUser('Alice', 'Johnson')).toBe('Hello, Alice Johnson! Welcome!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('greetUser - returns default greeting when names are missing', () => {
    expect(greetUser()).toBe('Hello, Guest! Welcome!');
    expect(greetUser('John')).toBe('Hello, Guest! Welcome!');
    expect(greetUser('', 'Doe')).toBe('Hello, Guest! Welcome!');
    expect(greetUser('', '')).toBe('Hello, Guest! Welcome!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('removeFirstItemPurely - removes first item without modifying original', () => {
    const arr1 = ['a', 'b', 'c'];
    expect(removeFirstItemPurely(arr1)).toEqual(['b', 'c']);
    expect(arr1).toEqual(['a', 'b', 'c']);

    const arr2 = [1, 2, 3, 4];
    expect(removeFirstItemPurely(arr2)).toEqual([2, 3, 4]);
    expect(arr2).toEqual([1, 2, 3, 4]);

    const arr3 = ['only'];
    expect(removeFirstItemPurely(arr3)).toEqual([]);
    expect(arr3).toEqual(['only']);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('removeFirstItemPurely - handles empty array', () => {
    const arr = [];
    expect(removeFirstItemPurely(arr)).toEqual([]);
    expect(arr).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
