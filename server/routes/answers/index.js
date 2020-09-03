const express = require('express');
const router = express.Router();
const besaid = require('../../questions/besaid');
const luca = require('../../questions/luca');
const djose = require('../../questions/djose');
const thunderPlains = require('../../questions/thunderPlains');
const gagazet = require('../../questions/gagazet');
const sin = require('../../questions/sin');
const { findIndex } = require('lodash');

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
  const { option } = req.query;

  if (!level) {
    res.send({error: 'No level sent in query params.'});
    throw new Error('No level available in request params');
  };

  if (!round) {
    res.send({ error: 'No round number sent in query params.'});
    throw new Error('No round available in request params');
  };

  if (!option) {
    res.send({ error: 'No option sent in query params.'});
    throw new Error('No option available in request params');
  };

  // Get the index of the answers array
  // then check if it has the value of 1 - meaning true
  const answers = levelMap[level][round].answers;

  const answerIndex = findIndex(answers, function(o) { return o.a === option });

  if(answers[answerIndex].value === 1) {
    res.send({ answer: true });
  } else {
    res.send({ answer: false });
  };
});

module.exports = router;