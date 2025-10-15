const path = require('path');
const ScoreCounter = require('score-tests');
const {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  getNamesOfGreedyGnomes,
  letterCaseCounts,
} = require('../src/from-scratch');

const testSuiteName = 'From Scratch Tests';
const scoresDir = path.join(__dirname, '..', 'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

const log = jest.spyOn(console, 'log').mockImplementation(() => { });

describe(testSuiteName, () => {
  afterEach(jest.clearAllMocks);

  it('From Scratch 1: petJudger - handles missing arguments', () => {
    petJudger();
    const logsExpected = 1;

    const consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(logsExpected);

    const [messageLogged] = consoleLogCalls[logsExpected - 1];
    expect(messageLogged).toBe('Missing information. Please provide a valid pet.');

    jest.clearAllMocks();
    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 1: petJudger - handles missing name argument', () => {
    petJudger('cat');
    const consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(1);
    const [messageLogged] = consoleLogCalls[0];
    expect(messageLogged).toBe('Missing information. Please provide a valid pet.');
    jest.clearAllMocks();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 1: petJudger - handles different breeds with valid name', () => {
    const randomName = (Math.random() + 1).toString(36).slice(2);
    const logsExpected = 1;
    let messageLogged;
    let consoleLogCalls;

    petJudger('cat', randomName);
    consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(logsExpected);
    [messageLogged] = consoleLogCalls[logsExpected - 1];
    expect(messageLogged).toBe(`I love cats! ${randomName} is so cute!`);
    jest.clearAllMocks();

    petJudger('dog', randomName);
    consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(logsExpected);
    [messageLogged] = consoleLogCalls[logsExpected - 1];
    expect(messageLogged).toBe(`I love dogs! ${randomName} is so cute!`);
    jest.clearAllMocks();

    petJudger('turtle', randomName);
    consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(logsExpected);
    [messageLogged] = consoleLogCalls[logsExpected - 1];
    expect(messageLogged).toBe(`Who doesn't love a good turtle? ${randomName} is the tops.`);
    jest.clearAllMocks();

    petJudger('snake', randomName);
    consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(logsExpected);
    [messageLogged] = consoleLogCalls[logsExpected - 1];
    expect(messageLogged).toBe(`Not a fan, please take ${randomName} and leave.`);
    jest.clearAllMocks();

    petJudger('owl', randomName);
    consoleLogCalls = log.mock.calls;
    expect(consoleLogCalls.length).toBe(logsExpected);
    [messageLogged] = consoleLogCalls[logsExpected - 1];
    expect(messageLogged).toBe('What an...interesting pet.');
    jest.clearAllMocks();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 2: loopFromOneUpToAnother - it logs the correct numbers', () => {
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

    // handles equal start and end
    loopFromOneUpToAnother(1, 1);
    expect(log).toHaveBeenCalledTimes(0);
    jest.clearAllMocks();

    // handles start greater than end
    loopFromOneUpToAnother(5, 3);
    expect(log).toHaveBeenCalledTimes(0);
    jest.clearAllMocks();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 3: shoutEveryLetterForLoop - it logs the correct letters', () => {
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

    jest.clearAllMocks();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 3: shoutEveryLetterForLoop - it uses a for loop', () => {
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

  it('From Scratch 4: letterCaseCounts - it correctly counts the letter cases', () => {
    expect(letterCaseCounts('abCdef 123')).toEqual({ lowercase: 5, uppercase: 1, neither: 4 });
    expect(letterCaseCounts('AbCd +Ef')).toEqual({ lowercase: 3, uppercase: 3, neither: 2 });
    expect(letterCaseCounts('123')).toEqual({ lowercase: 0, uppercase: 0, neither: 3 });

    jest.clearAllMocks();

    scoreCounter.correct(expect); // DO NOT TOUCH
  });

  it('From Scratch 5: getNamesOfGreedyGnomes - returns an array of the right length', () => {
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

  it('From Scratch 5: getNamesOfGreedyGnomes - returns only the names of the gnomes', () => {
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

  // IGNORE PLEASE
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
});
