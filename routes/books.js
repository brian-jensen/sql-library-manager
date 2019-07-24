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

router.get('/new', (req, res) => res.render('new-book'));

router.post('/new', (req, res) => {

});
// post /books/new - Posts a new book to the database.
// get /books/:id - Shows book detail form.
// post /books/:id - Updates book info in the database.
// post /books/:id/delete 

module.exports = router;


