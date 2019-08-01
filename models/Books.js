const Sequelize = require('sequelize');
const db = require('../config/database');

// Sequelize model for the books in the library.db database.
// Added validation to ensure that the title and author properties have values when the new book and update book forms are submitted.
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