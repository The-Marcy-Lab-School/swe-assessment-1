const path = require('path');
const ScoreCounter = require('score-tests');
const {
  fixVariables,
  doubleAllItemsPurely,
  getUpdatedParent,
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

  it("getUpdatedParent - does not mutate the parent by making a deep clone and then adding a child to the tail of the parent's array", () => {
    const parent1 = {
      name: 'Tom',
      children: ['alice', 'ben', 'charlie'],
    };
    const parent1Outcome = {
      name: 'Tom',
      children: ['alice', 'ben', 'charlie', 'dylan'],
    };

    const result1 = getUpdatedParent(parent1, 'dylan')
    // the returned object should match the outcome.
    expect(result1).toEqual(parent1Outcome);

    // parent1 should NOT be mutated. It should be the same as before.
    expect(parent1).not.toEqual(parent1Outcome);

    // Testing with another set of data
    const parent2 = {
      name: 'Greg',
      children: ['a', 'b', 'c', 'd', 'e'],
    };
    const parent2Outcome = {
      name: 'Greg',
      children: ['a', 'b', 'c', 'd', 'e', 'f'],
    };

    expect(getUpdatedParent(parent2, 'f')).toEqual(parent2Outcome);
    expect(parent2).not.toEqual(parent2Outcome);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
