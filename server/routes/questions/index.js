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

  res.send({ 
    question: levelMap[level][round].question,
    answers: levelMap[level][round].answers,
    questionTime: 30,
  });
});

module.exports = router;