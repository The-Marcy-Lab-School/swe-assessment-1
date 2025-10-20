const path = require('path');
const ScoreCounter = require('score-tests');
const {
  fixVariables,
  doubleAllItemsPurely,
  sumArray,
} = require('../src/debug');

const testSuiteName = 'Debug Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const log = jest.spyOn(console, 'log').mockImplementation(() => { });

describe(testSuiteName, () => {
  afterEach(jest.clearAllMocks);
  it('fixVariable - The message is logged and returned correctly', () => {
    const finalLog = "And that's how I feel about the temp!";

    // invoke the function with a temp of 0
    let result = fixVariables(0);
    // grab the two console logs invoked by the function
    let [[firstLog], [secondLog]] = log.mock.calls;

    let expectedMsg = 'Pretty chilly.';
    expect(result).toBe(expectedMsg);
    expect(firstLog).toBe(expectedMsg);
    expect(secondLog).toBe(finalLog);
    // reset the console log counter for the next test
    jest.clearAllMocks();

    // The rest of the tests follow the same pattern.
    result = fixVariables(30);
    expectedMsg = 'Not bad.';
    [[firstLog], [secondLog]] = log.mock.calls;
    expect(result).toBe(expectedMsg);
    expect(firstLog).toBe(expectedMsg);
    expect(secondLog).toBe(finalLog);
    jest.clearAllMocks();

    expectedMsg = 'On the hot side.';
    result = fixVariables(70);
    [[firstLog], [secondLog]] = log.mock.calls;
    expect(result).toBe(expectedMsg);
    expect(firstLog).toBe(expectedMsg);
    expect(secondLog).toBe(finalLog);
    jest.clearAllMocks();

    expectedMsg = 'I will die of heat.';
    result = fixVariables(100);
    [[firstLog], [secondLog]] = log.mock.calls;
    expect(result).toBe(expectedMsg);
    expect(firstLog).toBe(expectedMsg);
    expect(secondLog).toBe(finalLog);
    jest.clearAllMocks();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('doubleAllItemsPurely - doubles each item in the array without modifying the original', () => {
    const arr1 = [1, 2, 3, 4];
    expect(doubleAllItemsPurely(arr1)).toEqual([2, 4, 6, 8]);
    expect(arr1).toEqual([1, 2, 3, 4]);

    const arr2 = [9, 12, 15];
    expect(doubleAllItemsPurely(arr2)).toEqual([18, 24, 30]);
    expect(arr2).toEqual([9, 12, 15]);

    const arr3 = [];
    expect(doubleAllItemsPurely(arr3)).toEqual([]);
    expect(arr3).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('sumArray - returns the sum of all numbers in the array', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toEqual(15);
    expect(sumArray([1, 1, 1, 1, 1])).toEqual(5);
    expect(sumArray([])).toEqual(0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
