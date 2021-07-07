const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./db/database');

const restaurants = require('./routes/restaurants.routes');
const couriers = require('./routes/couriers.routes');
const dishes = require('./routes/dishes.routes');
const user = require('./routes/users.routes');
const order = require('./routes/orders.routes');

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', restaurants);
app.use('/api', couriers);
app.use('/api', dishes);
app.use('/api', user);
app.use('/api', order);

app.listen(5000, () => {
  console.log('Work');
});
