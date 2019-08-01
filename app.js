/* eslint-disable no-console */
const express = require('express');
const open = require('open');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('public'));
app.use('/books', require('./routes/books'));

// Sets HTML view engine to use pug.
app.set('view engine', 'pug');

// Redirects browser to the /books route on page load
app.get('/', (req, res) => res.redirect(`/books`));

// Logs 404 error details to the console, returns a 404 NOT FOUND HTTP status code and renders a "Page Not Found" view when the user navigates to a non-existent route.
app.use((req, res) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  console.error(err);
  res.status(404);
  res.render('page-not-found');
});

// Logs server error to the console and renders an “error” view with a friendly message for the user when a server error occurs.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.render('error');
});

// Serves application to localhost:3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`The application is running on http://localhost:${PORT}`));

// Opens application in users default browser
open(`http://localhost:${PORT}`);