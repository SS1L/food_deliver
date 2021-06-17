const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const restaurants = require('./api/routes/restaurants.routes');
const couriers = require('./api/routes/couriers.routes');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', restaurants);
app.use('/api', couriers);

app.listen(5000, () => {
  console.log('All work');
});
