const Sequelize = require('sequelize');
const db = require('../config/database');

const Library = db.define('Books', {
  title: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
});

module.exports = Library;