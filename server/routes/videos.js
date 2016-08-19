const express = require('express');
const router = express.Router();

const Video = require('../models/video');

router.route('/')
  .get((req, res) => {
    Todo.find({}, (err, todos) => {
      res.send('works!')
    });
  })

module.exports = router;