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

  Books.create({
    title,
    author,
    genre,
    year
  })
  .then(() => res.redirect('/books'))
  .catch(err => console.error(err));

});

module.exports = router;


