const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const router = require('./api/routes/node.routes');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(5000, () => {
  console.log('All work');
});
