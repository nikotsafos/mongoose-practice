// Require needed modules
const express = require('express');

// Declare router
const router = express.Router();

router.get('/', (req, res) => {
  // TODO: Replace stub route with page that renders list of all pieces
  res.render('pieces/index');
});

router.post('/', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.send('STUB - NEW PIECES POST');
});

router.get('/new', (req, res) => {
  // TODO: Replace stub route with page that renders form for adding new piece
  res.render('pieces/new');
});

router.get('/:id', (req, res) => {
  // TODO: Replace stub route with page that renders piece details
  //  and all the info about it's creator and the museum it's located in
  res.send('pieces/show');
});

module.exports = router;


router.get('/new', (req, res) => {
  db.piece.create({
    req.body: req.body
  })
  .then(result => {
    res.send('success');
  })
  .catch(err => {
    console.log(err);
    res.send('error, check your logs');
  });
});
