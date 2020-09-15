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

const nextLevelMap = {
  besaid: 'luca',
  luca: 'djose',
  djose: 'thunderPlains',
  thunderPlains: 'gagazet',
  gagazet: 'sin',
  sin: null,
}

router.get('/:level', (req, res, next) => {
  const { level } = req.params;
  if (!level) {
    res.send({error: 'No level sent in query params.'});
    throw new Error('No level available in request params');
  };

  res.send({ 
    level,
    numQuestions: levelMap[level].length,
    nextLevel: nextLevelMap[level]
  });
});

module.exports = router;