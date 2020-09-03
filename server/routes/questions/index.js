const express = require('express');
const router = express.Router();
const besaid = require('../../questions/besaid');
const luca = require('../../questions/luca');
const djose = require('../../questions/djose');
const thunderPlains = require('../../questions/thunderPlains');
const gagazet = require('../../questions/gagazet');
const sin = require('../../questions/sin');

const levelMap = {
  besaid,
  luca,
  djose,
  thunderPlains,
  gagazet,
  sin,
};

router.get('/:level/:round', (req, res, next) => {
  const { level, round } = req.params;
  if (!level) {
    res.send({error: 'No level sent in query params.'});
    throw new Error('No level available in request params');
  };

  if (!round) {
    res.send({ error: 'No round number sent in query params.'});
    throw new Error('No round available in request params');
  };

  let nextLevel;
  let nextRound;

  // Level stays the same utill there is no more questions
  if (levelMap[level].length > round) {
    nextLevel = level;
    nextRound = parseInt(round) + 1;
  } else {
    // Change the level and reset round to 0
    const levelsArray = Object.keys(levelMap);
    let levelIndex;
    levelsArray.forEach((l, index) => { if (l === level) levelIndex = index; })
    nextLevel = levelsArray[levelIndex + 1];
    nextRound = 0;
  };

  /**
   * question: current question
   * answers: array of answers
   * level: current level
   * round: current round
   * nextLevel: next level
   * nextRound: next round
   */
  res.send({ 
    question: levelMap[level][round].question,
    answers: levelMap[level][round].answers,
    level,
    round,
    nextLevel,
    nextRound,
  });
});

module.exports = router;