const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const questionsRoutes = require('./routes/questions')
const usersRoutes = require('./routes/users');
const levelRoutes = require('./routes/levels');

const app = express();
const port = 5000;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    health: 'Yeah, we runnin.'
  });
});

app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/questions', questionsRoutes);
app.use('/levels', levelRoutes)
app.use('/users', usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})