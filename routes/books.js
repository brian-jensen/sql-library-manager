/* eslint-disable no-console */
const express = require('express');
const router = express.Router();
const Books = require('../models/Books');

router.get('/', (req, res) => 
  Books.findAll()
    .then(books => {
      res.render('index', {
        books
      });
    })
    .catch(err => console.error(err)));

// Renders form to create a new book.
router.get('/new', (req, res) => res.render('new-book'));

router.post('/new', (req, res) => {
  let { title, author, genre, year } = req.body;
  Books.create({ title, author, genre, year })
    .then(() => res.redirect('/books'))
    .catch(err => {
      if (err.name === 'SequelizeValidationError') {
        res.render('new-book', {
          errors: err.errors
        });
      } else {
        throw err;
      }
    });
});

// get /books/:id - Shows book detail form.
router.get('/:id', (req, res) => {
  Books.findByPk(req.params.id)
    .then(book => {
      res.render('update-book', {
        book
      });
    });
});
// post /books/:id - Updates book info in the database.
router.post('/:id', (req, res) => {
  Books.findByPk(req.params.id)
    .then(book => {
      return book.update(req.body);
    })
    .then(book => {
      res.redirect(`/books/${book.id}`);
    })
    .catch(err => {
      if (err.name === 'SequelizeValidationError') {
        let book = Books.build(req.body);
        book.id = req.params.id;
        res.render('update-book', { 
          book,
          errors: err.errors 
        });
      } else {
        throw err;
      }
    });

});

module.exports = router;