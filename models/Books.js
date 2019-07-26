const Sequelize = require('sequelize');
const db = require('../config/database');

const Library = db.define('Books', {
  title: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: "Title is required."
      }
    }
  },
  author: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: "Author is required."
      }
    }
  },
  genre: {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
});

module.exports = Library;