const path = require('path');
const ScoreCounter = require('score-tests');
const {
  calculateTip,
  countVowels,
  findLargest,
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  it('From Scratch 1: calculateTip - calculates tip correctly', () => {
    expect(calculateTip(100, 20)).toBe(20);
    expect(calculateTip(50, 15)).toBe(7.5);
    expect(calculateTip(80, 18)).toBe(14.4);
    expect(calculateTip(200, 25)).toBe(50);
    expect(calculateTip(33.50, 18)).toBeCloseTo(6.03, 2);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 1: calculateTip - handles invalid inputs', () => {
    expect(calculateTip(100)).toBe(null);
    expect(calculateTip()).toBe(null);
    expect(calculateTip('100', 20)).toBe(null);
    expect(calculateTip(100, '20')).toBe(null);
    expect(calculateTip('100', '20')).toBe(null);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 2: countVowels - counts vowels correctly', () => {
    expect(countVowels('hello')).toBe(2);
    expect(countVowels('JavaScript')).toBe(3);
    expect(countVowels('xyz')).toBe(0);
    expect(countVowels('')).toBe(0);
    expect(countVowels('AEIOU')).toBe(5);
    expect(countVowels('aeiou')).toBe(5);
    expect(countVowels('The Quick Brown Fox')).toBe(5);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 2: countVowels - uses a for loop', () => {
    const strFunc = countVowels.toString();
    const usesFor = /for\s+\(/gi.test(strFunc);
    expect(usesFor).toBe(true);

    // Repeated test to prevent auto pass
    expect(countVowels('programming')).toBe(3);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 3: findLargest - finds largest number', () => {
    expect(findLargest([1, 5, 3, 9, 2])).toBe(9);
    expect(findLargest([10, 20, 30])).toBe(30);
    expect(findLargest([-5, -1, -10])).toBe(-1);
    expect(findLargest([42])).toBe(42);
    expect(findLargest([100, 200, 150, 175])).toBe(200);
    expect(findLargest([5, 5, 5, 5])).toBe(5);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 3: findLargest - handles edge cases', () => {
    expect(findLargest([])).toBe(null);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 3: findLargest - uses a loop', () => {
    const strFunc = findLargest.toString();
    const usesLoop = /for\s+\(|while\s+\(/gi.test(strFunc);
    const usesMathMax = /Math\.max/gi.test(strFunc);

    expect(usesLoop).toBe(true);
    expect(usesMathMax).toBe(false);

    // Repeated test to prevent auto pass
    expect(findLargest([7, 2, 9, 1])).toBe(9);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
