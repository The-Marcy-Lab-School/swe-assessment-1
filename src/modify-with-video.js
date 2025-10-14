const players = [
  { name: "Alex", score: 0 },
  { name: "Taylor", score: 0 },
  { name: "Jordan", score: 0 },
  { name: "Morgan", score: 0 }
];

const increaseScore = (name) => {
  for (let i = 0; i <= players.length; i++) {
    if (players[i].name = name) {
      players[i].score += 1;
    }
  }
}

const decreaseScore = (name) => {
  for (let i = 0; i < players.length; i++) {
    if (players[i].name === name) {
      players[i].score -= 1;
    }
  }
}

const resetAllScores = () => {
  for (let i = 0; i < players.length; i++) {
    let player = players[i];
    resetSingleScore(player);
  }
}

const resetSingleScore = (player) => {
  score = 0;
}

const getTopScorer = () => {
  let maxScore = -Infinity;
  let topPlayer;

  for (let i = 0; i < players.length; i++) {
    if (players[i].score > maxScore) {
      maxScore = players[i].score;
      topPlayer = players[i].name;
    }
  }

  return topPlayer;
}

increaseScore("Alex");
increaseScore("Alex");
decreaseScore("Jordan");
resetAllScores();
console.log(getTopScorer()); // What do you expect to see here?
console.log(players);

module.exports = {
  increaseScore,
  decreaseScore,
  resetAllScores,
  getTopScorer,
};