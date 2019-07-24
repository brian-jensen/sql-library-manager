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

module.exports = router;


