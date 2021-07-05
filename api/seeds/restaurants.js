const tableName = 'restaurants';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable(tableName, [
      { name: 'La Fontana', address: 'Moskovska St, 31/33', cousine: 'Italian' },
      { name: 'Mercato Italiano', address: 'Sportyvna Square, 1a', cousine: 'Italian' },
      { name: 'Ikigai', address: 'Pushkinska St, 29', cousine: 'Japan' },
      { name: 'Murakami', address: 'Velyka Vasylkivska St, 57/3', cousine: 'Japan' },
      { name: 'The Kitchen 21', address: 'Petra Sahaidachnoho St, 21', cousine: 'Indian' },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {}); 
  },
};
