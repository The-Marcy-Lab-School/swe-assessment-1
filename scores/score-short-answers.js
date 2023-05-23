const fs = require('fs');
const path = require('path');
const prompt = require('prompt-sync')({ sigint: true });
const scoresJson = require('./scores.json');

scoresJson.shortAnswers ||= { scores: {}, hasGrammarIssues: false, humanReadable: 0 };

const shortAnswersDir = path.join(__dirname, '..', 'short-answers');

const selectOnlyQuestionFiles = (fileName) => fileName.match(/q\d+/);

const scoreTheQuestion = (fileName, idx, arr) => {
  const contents = fs.readFileSync(path.join(shortAnswersDir, fileName), 'utf-8');
  console.clear();
  console.log(`Q${idx + 1} of ${arr.length}\n${contents}\n----------------`);
  let score;
  while (true) {
    score = Number(prompt('Score: '));
    if ([0, 1, 2].includes(score)) break;
    console.log('Invalid score. Please enter 0, 1, or 2');
  }
  const questionNumber = fileName.split('.md')[0];
  scoresJson.shortAnswers.scores[questionNumber] = score;
};

const setGrammarIssues = () => {
  console.clear();
  let yOrN;
  while (true) {
    yOrN = prompt('Does the student have grammar issues? (y/n) ');
    if (['y', 'n'].includes(yOrN)) break;
    console.log('Please enter y or n exactly.');
  }

  scoresJson.shortAnswers.hasGrammarIssues = yOrN === 'y';
};

const setFinalScore = () => {
  const { scores, hasGrammarIssues } = scoresJson.shortAnswers;
  const totalScore = Object.values(scores).reduce((total, num) => total + num, 0);
  const humanReadable = totalScore - (Number(hasGrammarIssues) * 0.5);
  scoresJson.shortAnswers.humanReadable = humanReadable;

  console.log(`\nCanvas score: ${humanReadable}`);
};

const main = () => {
  fs.readdirSync(shortAnswersDir)
    .filter(selectOnlyQuestionFiles)
    .forEach(scoreTheQuestion);

  setGrammarIssues();

  setFinalScore();

  fs.writeFileSync(path.join(__dirname, 'scores.json'), JSON.stringify(scoresJson, null, 2));
};

main();
