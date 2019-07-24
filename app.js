/* eslint-disable no-console */
const express = require('express');
const open = require('open');
const app = express();
const db = require('./config/database');

app.use('/static', express.static('public'));
app.use('/books', require('./routes/books'));
app.set('view engine', 'pug');

app.get('/', (req, res) => res.redirect(`/books`));

db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Error: ' + err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`The application is running on http://localhost:${PORT}`));

open(`http://localhost:${PORT}`);