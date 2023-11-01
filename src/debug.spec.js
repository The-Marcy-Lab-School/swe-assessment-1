const path = require('path');
const ScoreCounter = require('score-tests');
const {
  fixVariables,
  doubleAllItemsPurely,
  addChildToParentMutation,
} = require('./debug');

const testSuiteName = 'Debug Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const log = jest.spyOn(console, 'log').mockImplementation(() => {});

describe(testSuiteName, () => {
  afterEach(jest.clearAllMocks);
  it('fixVariable - The message is logged and returned correctly', () => {
    const finalLog = "And that's how I feel about the temp!";

    let expectedMsg = 'Pretty chilly.';
    let result = fixVariables(0);
    const [[dynamicMsg1], [staticMsg1]] = log.mock.calls;
    expect(dynamicMsg1).toBe(expectedMsg);
    expect(staticMsg1).toBe(finalLog);
    expect(result).toBe(expectedMsg);
    jest.clearAllMocks();

    result = fixVariables(30);
    expectedMsg = 'Not bad.';
    const [[dynamicMsg2], [staticMsg2]] = log.mock.calls;
    expect(dynamicMsg2).toBe(expectedMsg);
    expect(staticMsg2).toBe(finalLog);
    expect(result).toBe(expectedMsg);
    jest.clearAllMocks();

    expectedMsg = 'On the hot side.';
    result = fixVariables(70);
    const [[dynamicMsg3], [staticMsg3]] = log.mock.calls;
    expect(dynamicMsg3).toBe(expectedMsg);
    expect(staticMsg3).toBe(finalLog);
    expect(result).toBe(expectedMsg);
    jest.clearAllMocks();

    expectedMsg = 'I will die of heat.';
    result = fixVariables(100);
    const [[dynamicMsg4], [staticMsg4]] = log.mock.calls;
    expect(dynamicMsg4).toBe(expectedMsg);
    expect(staticMsg4).toBe(finalLog);
    expect(result).toBe(expectedMsg);
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

  it("addChildToParentMutation - mutates the parent by adding a child to the tail of the parent's array", () => {
    const child1 = { name: 'Itzel' };
    const parent1 = {
      name: 'Tom',
      children: [],
    };
    const parent1Outcome = {
      ...parent1,
      children: [child1],
    };

    expect(addChildToParentMutation(parent1, child1)).toEqual(parent1Outcome);
    expect(parent1).toEqual(parent1Outcome);

    const child2 = { name: 'Itzel' };
    const child3 = { name: 'Zo' };
    const parent2 = {
      name: 'Greg',
      children: [child2],
    };
    const parent2Outcome = {
      ...parent2,
      children: [child2, child3],
    };

    expect(addChildToParentMutation(parent2, child3)).toEqual(parent2Outcome);
    expect(parent2).toEqual(parent2Outcome);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
