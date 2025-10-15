/*
  DEBUGGING ACTIVITY: Score Tracker

  You've been hired by a small game company to help debug their score-tracking system.

  The code SHOULD:
  1. Keep track of several players and their scores
  2. Increase or decrease a player's score
  3. Reset all scores to zero
  4. Return the name of the current top scorer

  However, some functionality isn't working correctly.

  YOUR TASKS:
  1. Run this file and observe what happens
  2. Identify 3 bugs in the code
  3. Fix all 3 bugs
  4. Record a 2-4 minute video explaining:
     - What you expected to happen
     - The bugs you found (what's wrong and why)
     - The fixes you implemented
*/

const players = [
  { name: 'Taylor', score: 0 },
  { name: 'Jordan', score: 0 },
  { name: 'Alex', score: 0 },
  { name: 'Morgan', score: 0 },
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

// Test the functions
increaseScore('Alex');
increaseScore('Alex');
decreaseScore('Jordan');
console.log(players);
console.log(getTopScorer());

resetAllScores();
console.log(players);
console.log(getTopScorer());

// ============================================
// Exports (for testing)
// ============================================

module.exports = {
  players,
  increaseScore,
  decreaseScore,
  resetAllScores,
  getTopScorer,
};
