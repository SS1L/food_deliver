const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const router = require('./api/routes/node.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(5000, () => {
  console.log('All work');
});
