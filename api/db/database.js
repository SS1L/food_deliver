const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  // user: process.env.DB_USER,
  // database: process.env.DB_NAME,
  // password: process.env.DB_PASSWORD,
  // port: process.env.DB_PORT,
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// pool.on('connect', () => {
//   console.log('DB connected');
// });

db.authenticate()
  .then(() => console.log('Database connected'))
  .catch((e) => console.log(e));
// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };

module.exports = db;
