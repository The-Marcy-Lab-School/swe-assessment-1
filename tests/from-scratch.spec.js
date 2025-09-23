const path = require('path');
const ScoreCounter = require('score-tests');
const {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  shoutArrayMethod,
  generateMultiplesOf5ToNum,
  isLongArray,
  appendOrPrepend,
  replaceMiddleValue,
  getAllXCoordinates,
  carMaker,
  getFavoriteChildName,
  getPessimisticTotal,
  getNamesOfGreedyGnomes,
  getAllNumbersFromString,
  obliterate,
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const log = jest.spyOn(console, 'log').mockImplementation(() => { });

describe(testSuiteName, () => {
  afterEach(jest.clearAllMocks);
  it('petJudger - it logs the correct messages', () => {
    let messageLogged, consoleLogCalls;

    // 1. test the function with both the breed and the name undefined
    petJudger();

    // this is an array of all the console.log calls
    consoleLogCalls = log.mock.calls;

    // the function should print only one message
    expect(consoleLogCalls.length).toBe(1);

    // verify that the message printed was the correct message
    messageLogged = consoleLogCalls[0][0];
    expect(messageLogged).toBe('Missing information. Please provide a valid pet.');
    jest.clearAllMocks();

    // 2. test the function with the breed but the name is undefined
    petJudger('cat');
    consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(1);
    messageLogged = log.mock.calls[0][0];
    expect(messageLogged).toBe('Missing information. Please provide a valid pet.');
    jest.clearAllMocks();

    // 3. test the function with 'cat' breed and a random name 
    const randomName = (Math.random() + 1).toString(36).slice(2);
    petJudger('cat', randomName);
    consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(1);
    messageLogged = log.mock.calls[0][0];
    expect(messageLogged).toBe(`I love cats! ${randomName} is so cute!`);
    jest.clearAllMocks();

    // test the remaining breeds with the random name.
    petJudger('dog', randomName);
    consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(1);
    messageLogged = log.mock.calls[0][0];
    expect(messageLogged).toBe(`I love dogs! ${randomName} is so cute!`);
    jest.clearAllMocks();

    petJudger('turtle', randomName);
    consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(1);
    messageLogged = log.mock.calls[0][0];
    expect(messageLogged).toBe(`Who doesn't love a good turtle? ${randomName} is the tops.`);
    jest.clearAllMocks();

    petJudger('snake', randomName);
    consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(1);
    messageLogged = log.mock.calls[0][0];
    expect(messageLogged).toBe(`Not a fan, please take ${randomName} and leave.`);
    jest.clearAllMocks();

    petJudger('owl', randomName);
    consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(1);
    messageLogged = log.mock.calls[0][0];
    expect(messageLogged).toBe('What an...interesting pet.');
    jest.clearAllMocks();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('loopFromOneUpToAnother - it logs the correct numbers', () => {
    // test the function with 5-10
    loopFromOneUpToAnother(5, 10);

    // we expect the function to have used console.log 5 times
    expect(log).toHaveBeenCalledTimes(5);

    // we expect the first call to have been `console.log(5)`
    expect(log).toHaveBeenNthCalledWith(1, 5);

    // we expect the second call to have been `console.log(6)`
    expect(log).toHaveBeenNthCalledWith(2, 6);

    // and so on...
    expect(log).toHaveBeenNthCalledWith(3, 7);
    expect(log).toHaveBeenNthCalledWith(4, 8);
    expect(log).toHaveBeenNthCalledWith(5, 9);
    jest.clearAllMocks();

    // test the function with 1-5
    loopFromOneUpToAnother(1, 5);
    expect(log).toHaveBeenCalledTimes(4);
    expect(log).toHaveBeenNthCalledWith(1, 1);
    expect(log).toHaveBeenNthCalledWith(2, 2);
    expect(log).toHaveBeenNthCalledWith(3, 3);
    expect(log).toHaveBeenNthCalledWith(4, 4);
    jest.clearAllMocks();

    // test the function with 10-16
    loopFromOneUpToAnother(10, 16);
    expect(log).toHaveBeenCalledTimes(6);
    expect(log).toHaveBeenNthCalledWith(1, 10);
    expect(log).toHaveBeenNthCalledWith(2, 11);
    expect(log).toHaveBeenNthCalledWith(3, 12);
    expect(log).toHaveBeenNthCalledWith(4, 13);
    expect(log).toHaveBeenNthCalledWith(5, 14);
    expect(log).toHaveBeenNthCalledWith(6, 15);
    jest.clearAllMocks();

    // if start and end are the same, it shouldn't log at all
    loopFromOneUpToAnother(1, 1);
    expect(log).toHaveBeenCalledTimes(0);

    // if start > end, it shouldn't log at all
    loopFromOneUpToAnother(5, 3);
    expect(log).toHaveBeenCalledTimes(0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('shoutEveryLetterForLoop - it logs the correct letters', () => {
    shoutEveryLetterForLoop('hello');
    // we expect console.log to have been called 5 times
    expect(log).toHaveBeenCalledTimes(5);

    // we expect the first call to have been `console.log('H!')
    expect(log).toHaveBeenNthCalledWith(1, 'H!');

    // we expect the second call to have been `console.log('E!')
    expect(log).toHaveBeenNthCalledWith(2, 'E!');

    // and so on...
    expect(log).toHaveBeenNthCalledWith(3, 'L!');
    expect(log).toHaveBeenNthCalledWith(4, 'L!');
    expect(log).toHaveBeenNthCalledWith(5, 'O!');

    jest.clearAllMocks();

    shoutEveryLetterForLoop('goodbye');
    expect(log).toHaveBeenCalledTimes(7);
    expect(log).toHaveBeenNthCalledWith(1, 'G!');
    expect(log).toHaveBeenNthCalledWith(2, 'O!');
    expect(log).toHaveBeenNthCalledWith(3, 'O!');
    expect(log).toHaveBeenNthCalledWith(4, 'D!');
    expect(log).toHaveBeenNthCalledWith(5, 'B!');
    expect(log).toHaveBeenNthCalledWith(6, 'Y!');
    expect(log).toHaveBeenNthCalledWith(7, 'E!');
    jest.clearAllMocks();

    // no calls for an empty string
    shoutEveryLetterForLoop('');
    expect(log).toHaveBeenCalledTimes(0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('shoutEveryLetterForLoop - it uses a for loop', () => {
    // We're using regex on the stringified function
    const strFunc = shoutEveryLetterForLoop.toString();

    // we expect that your function does use the `for` loop
    const usesFor = /for\s+\(/gi.test(strFunc);
    expect(usesFor).toBe(true);

    // Repeated test to prevent auto pass
    shoutEveryLetterForLoop('hello');
    expect(log).toHaveBeenCalledTimes(5);
    expect(log).toHaveBeenNthCalledWith(1, 'H!');
    expect(log).toHaveBeenNthCalledWith(2, 'E!');
    expect(log).toHaveBeenNthCalledWith(3, 'L!');
    expect(log).toHaveBeenNthCalledWith(4, 'L!');
    expect(log).toHaveBeenNthCalledWith(5, 'O!');

    jest.clearAllMocks();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('shoutArrayMethod - it logs the correct letters without a for loop', () => {
    shoutArrayMethod('hey');
    expect(log).toHaveBeenCalledTimes(3);
    expect(log).toHaveBeenNthCalledWith(1, 'H!');
    expect(log).toHaveBeenNthCalledWith(2, 'E!');
    expect(log).toHaveBeenNthCalledWith(3, 'Y!');

    jest.clearAllMocks();

    shoutArrayMethod('sayonara');
    expect(log).toHaveBeenCalledTimes(8);
    expect(log).toHaveBeenNthCalledWith(1, 'S!');
    expect(log).toHaveBeenNthCalledWith(2, 'A!');
    expect(log).toHaveBeenNthCalledWith(3, 'Y!');
    expect(log).toHaveBeenNthCalledWith(4, 'O!');
    expect(log).toHaveBeenNthCalledWith(5, 'N!');
    expect(log).toHaveBeenNthCalledWith(6, 'A!');
    expect(log).toHaveBeenNthCalledWith(7, 'R!');
    expect(log).toHaveBeenNthCalledWith(8, 'A!');
    jest.clearAllMocks();

    shoutArrayMethod('');
    expect(log).toHaveBeenCalledTimes(0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('shoutArrayMethod - it does NOT use a for or while loop', () => {
    // We're using regex on the stringified function
    // so that means even a COMMENT can fail this test
    // DO NOT INCLUDE THE WORD "for" OR "while" anywhere in the function
    const strFunc = shoutArrayMethod.toString();
    const usesFor = /for\s+\(/gi.test(strFunc);
    expect(usesFor).toBe(false);
    const usesWhile = /while\s+\(/gi.test(strFunc);
    expect(usesWhile).toBe(false);

    // repeated test to prevent auto pass
    shoutArrayMethod('hey');
    expect(log).toHaveBeenCalledTimes(3);
    expect(log).toHaveBeenNthCalledWith(1, 'H!');
    expect(log).toHaveBeenNthCalledWith(2, 'E!');
    expect(log).toHaveBeenNthCalledWith(3, 'Y!');

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('generateMultiplesOf5ToNum - it returns the correct array of numbers', () => {
    expect(generateMultiplesOf5ToNum(100)).toEqual([
      5, 10, 15, 20, 25, 30, 35,
      40, 45, 50, 55, 60, 65, 70,
      75, 80, 85, 90, 95, 100,
    ]);

    expect(generateMultiplesOf5ToNum(73)).toEqual([
      5, 10, 15, 20, 25, 30, 35,
      40, 45, 50, 55, 60, 65, 70,
    ]);

    expect(generateMultiplesOf5ToNum(0)).toEqual([]);
    expect(generateMultiplesOf5ToNum(5)).toEqual([5]);
    expect(generateMultiplesOf5ToNum(-1)).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('isLongArray - it returns the correct boolean', () => {
    expect(isLongArray([])).toBe(false);
    expect(isLongArray([1, 2, 3, 4, 5])).toBe(false);
    expect(isLongArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(false);

    expect(isLongArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(true);
    expect(isLongArray([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(true);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('appendOrPrepend - adds value to the front or back of a given arr', () => {
    // If the boolean is true, prepend
    const arr2 = [1, 2, 3, 4, 5];
    appendOrPrepend(arr2, 0, true);
    expect(arr2).toEqual([0, 1, 2, 3, 4, 5]);

    // if the boolean is "falsy", append
    const arr1 = [1, 2, 3, 4, 5];
    appendOrPrepend(arr1, 6);
    expect(arr1).toEqual([1, 2, 3, 4, 5, 6]);

    // test with appending to an empty array
    const arr3 = [];
    appendOrPrepend(arr3, 1);
    expect(arr3).toEqual([1]);

    // test with appending an empty string
    const arr4 = [1, 2, 3, 4, 5];
    appendOrPrepend(arr4, '');
    expect(arr4).toEqual([1, 2, 3, 4, 5, '']);

    // test with prepending a string
    const arr5 = ['a', 'b', 'c', 'd'];
    appendOrPrepend(arr5, 'z', true);
    expect(arr5).toEqual(['z', 'a', 'b', 'c', 'd']);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('appendOrPrepend - handles missing value properly', () => {
    // if the value is null or undefined, the original array should be returned
    const arr1 = [1, 2, 3, 4, 5];
    expect(arr1).toEqual([1, 2, 3, 4, 5]);
    expect(arr1 === appendOrPrepend(arr1, null)).toBeTruthy();

    const arr2 = [1, 2, 3, 4, 5];
    expect(arr2 === appendOrPrepend(arr2, undefined)).toBeTruthy();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('replaceMiddleValue - replaces the middle value of the array with the given value', () => {
    const arr1 = [1, 2, 3, 4, 5];
    replaceMiddleValue(arr1, 6);
    expect(arr1).toEqual([1, 2, 6, 4, 5]);

    const arr2 = [1, 2, 3];
    replaceMiddleValue(arr2, 0);
    expect(arr2).toEqual([1, 0, 3]);

    const arr3 = ['a', 'b', 'c', 'd'];
    replaceMiddleValue(arr3, 'z');
    expect(arr3).toEqual(['a', 'b', 'z', 'd']);

    const arr4 = [];
    replaceMiddleValue(arr4, 1);
    expect(arr4).toEqual([1]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getAllXCoordinates - returns an array of all x coordinates', () => {
    const arr1 = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];
    expect(getAllXCoordinates(arr1)).toEqual([1, 3, 5]);

    // expect arr1 to not be modified
    expect(arr1).toEqual([
      [1, 2],
      [3, 4],
      [5, 6]
    ]);

    // these are [x, y, z] coordinates
    const arr2 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(getAllXCoordinates(arr2)).toEqual([1, 4, 7]);

    // expect arr2 to not be modified
    expect(arr2).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);

    const arr3 = [
      [12.3, 81.3],
      [1.2, 3.4],
      [5.6, 7.8]
    ];
    expect(getAllXCoordinates(arr3)).toEqual([12.3, 1.2, 5.6]);
    expect(arr3).toEqual([[12.3, 81.3], [1.2, 3.4], [5.6, 7.8]]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('carMaker - returns a car object with right primitive properties', () => {
    const car1 = carMaker('Model T', 'Ford', 2020, { name: 'Greg' });
    expect(car1.model).toBe('Model T');
    expect(car1.maker).toBe('Ford');
    expect(car1.year).toBe(2020);
    expect(car1.needsOilChange).toEqual(false);

    const car2 = carMaker('Camry', 'Toyota', 2021, { name: 'Tom' });
    expect(car2.model).toBe('Camry');
    expect(car2.maker).toBe('Toyota');
    expect(car2.year).toBe(2021);
    expect(car2.needsOilChange).toEqual(false);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('carMaker - returns a car object with the owner passed into the owners array', () => {
    const randomName1 = (Math.random() + 1).toString(36).slice(2);
    const owner1 = { name: randomName1 };
    const car1 = carMaker('Model T', 'Ford', 2020, owner1);
    expect(car1).toEqual({
      model: 'Model T',
      maker: 'Ford',
      year: 2020,
      needsOilChange: false,
      owners: [owner1],
    });

    const randomName2 = (Math.random() + 1).toString(36).slice(2);
    const owner2 = { name: randomName2 };
    const car2 = carMaker('Camry', 'Toyota', 2021, owner2);
    expect(car2).toEqual({
      model: 'Camry',
      maker: 'Toyota',
      year: 2021,
      needsOilChange: false,
      owners: [owner2],
    });

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getFavoriteChildName - returns the name of the first child', () => {
    const parent1 = {
      name: 'Greg',
      children: [
        { name: 'Tom' },
        { name: 'Sally' },
        { name: 'Jill' },
      ],
    };

    expect(getFavoriteChildName(parent1)).toBe('Tom');

    parent1.children.shift();
    expect(getFavoriteChildName(parent1)).toBe('Sally');

    parent1.children.shift();
    expect(getFavoriteChildName(parent1)).toBe('Jill');

    parent1.children.shift();
    expect(getFavoriteChildName(parent1)).toBe(null);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getPessimisticTotal - adds up all the given numbers to a total and then rounds down to the nearest int', () => {
    expect(getPessimisticTotal([1.2, 1.2, 1.2, 1.2, 1.2])).toBe(6);
    expect(getPessimisticTotal([0])).toBe(0);
    expect(getPessimisticTotal([])).toBe(0);
    expect(getPessimisticTotal([1])).toBe(1);
    expect(getPessimisticTotal([1.9])).toBe(1);
    expect(getPessimisticTotal([5.5, 5.5])).toBe(11);
    expect(getPessimisticTotal([1, 2, 3, 4, 5.1])).toBe(15);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getNamesOfGreedyGnomes - returns an array of the right length', () => {
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
        stolenDecorations: ['greek statue', 'chair', 'bird bath'],
      },
      {
        name: 'Peekle',
        gardenCount: 3,
        age: 101,
        stolenDecorations: ['bird bath', 'thermometer', 'rocks'],
      },
      {
        name: 'Jorbles',
        gardenCount: 3,
        age: 900,
        stolenDecorations: ['wind chimes', 'rocks', 'mini golfer'],
      },
    ];

    expect(getNamesOfGreedyGnomes(gnomes).length).toBe(4);

    gnomes[0].stolenDecorations.length = 2;
    gnomes[1].stolenDecorations.length = 2;
    gnomes[2].stolenDecorations.length = 2;
    gnomes[3].stolenDecorations.length = 2;
    expect(getNamesOfGreedyGnomes(gnomes).length).toBe(4);

    gnomes[0].stolenDecorations.length = 1;
    expect(getNamesOfGreedyGnomes(gnomes).length).toBe(3);

    gnomes[1].stolenDecorations.length = 0;
    expect(getNamesOfGreedyGnomes(gnomes).length).toBe(2);

    gnomes[2].stolenDecorations.length = 1;
    expect(getNamesOfGreedyGnomes(gnomes).length).toBe(1);

    gnomes[3].stolenDecorations.length = 0;
    expect(getNamesOfGreedyGnomes(gnomes).length).toBe(0);

    expect(getNamesOfGreedyGnomes([]).length).toEqual(0);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getNamesOfGreedyGnomes - returns only the names of the gnomes', () => {
    const gnomes = [
      {
        name: 'Garbeldel',
        gardenCount: 2,
        age: 407,
        stolenDecorations: ['chair', 'fountain'],
      },
      {
        name: 'Farbus',
        gardenCount: 3,
        age: 281,
        stolenDecorations: ['greek statue', 'chair'],
      },
      {
        name: 'Peekle',
        gardenCount: 3,
        age: 101,
        stolenDecorations: ['bird bath', 'thermometer'],
      },
      {
        name: 'Jorbles',
        gardenCount: 3,
        age: 900,
        stolenDecorations: ['wind chimes', 'mini golfer'],
      },
    ];

    expect(getNamesOfGreedyGnomes(gnomes)).toEqual([
      'Garbeldel', 'Farbus', 'Peekle', 'Jorbles',
    ]);

    gnomes[0].stolenDecorations.length = 2;
    gnomes[1].stolenDecorations.length = 2;

    expect(getNamesOfGreedyGnomes(gnomes)).toEqual([
      'Garbeldel', 'Farbus', 'Peekle', 'Jorbles',
    ]);

    gnomes[0].stolenDecorations.length = 0;
    expect(getNamesOfGreedyGnomes(gnomes)).toEqual(['Farbus', 'Peekle', 'Jorbles']);
    gnomes[1].stolenDecorations.length = 1;
    expect(getNamesOfGreedyGnomes(gnomes)).toEqual(['Peekle', 'Jorbles']);

    gnomes[2].stolenDecorations.length = 1;
    expect(getNamesOfGreedyGnomes(gnomes)).toEqual(['Jorbles']);

    gnomes[3].stolenDecorations.length = 0;
    expect(getNamesOfGreedyGnomes(gnomes)).toEqual([]);

    expect(getNamesOfGreedyGnomes([])).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('getNamesOfGreedyGnomes - does not use a for or while loop', () => {
    // We're using regex on the stringified function
    // so that means even a COMMENT can fail this test
    // DO NOT INCLUDE THE WORD "for" OR "while" anywhere in the function
    const strFunc = getNamesOfGreedyGnomes.toString();
    expect(/for\s+\(/gi.test(strFunc)).toBe(false);
    expect(/while\s+\(/gi.test(strFunc)).toBe(false);

    // repeated test to prevent auto pass
    expect(getNamesOfGreedyGnomes([])).toEqual([]);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('obliterate - removes all existing properties and adds wasObliterated', () => {
    const obliterated = { wasObliterated: true };
    const obj1 = { a: 1, b: 2, c: 3 };
    obliterate(obj1);
    expect(obj1).toEqual(obliterated);

    const obj2 = { foo: 1, bar: 2, meep: 3, morp: 4, 3: 5 };
    obliterate(obj2);
    expect(obj2).toEqual(obliterated);

    const obj4 = { [Math.random()]: Math.random(), [Math.random()]: Math.random() };
    obliterate(obj4);
    expect(obj4).toEqual(obliterated);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  // remove '.skip' if you want to test this function.
  it.skip('getAllNumbersFromString - returns an array of all digits', () => {
    expect(getAllNumbersFromString('')).toEqual([]);
    expect(getAllNumbersFromString('abc')).toEqual([]);
    expect(getAllNumbersFromString('123')).toEqual(['123']);
    expect(getAllNumbersFromString('abc123')).toEqual(['123']);
    expect(getAllNumbersFromString('abc12def3asd45')).toEqual(['12', '3', '45']);
    expect(getAllNumbersFromString('One fine day ten bees ate two pizza pies')).toEqual([]);
    expect(getAllNumbersFromString('1 fine day 10 bees ate 2 pizza 3.14s')).toEqual(['1', '10', '2', '3', '14']);

    scoreCounter.correct(expect); // DO NOT TOUCH
  });


  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
