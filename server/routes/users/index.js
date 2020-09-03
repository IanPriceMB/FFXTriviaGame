const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.send({
    id,
    level: 'Besaid',
    question: 0,
  });
});

module.exports = router;