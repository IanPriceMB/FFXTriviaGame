const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const questionsRoutes = require('./routes/questions')
const usersRoutes = require('./routes/users');
const answerRoutes = require('./routes/answers');

const app = express();
const port = 5000;
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    question: 'This is a sample question',
    answers: [
      'first answer',
      'second answer',
      'third answer',
      'fourth answer',
    ],
  });
});

app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/questions', questionsRoutes);
app.use('/answers', answerRoutes)
app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})