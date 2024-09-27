var express = require('express');
var router = express.Router();
const db = require('../db');

/* POST track listing. */
router.post('/', async function(req, res) {
  const result = await db.query('INSERT INTO track(height, timestamp) VALUES($1, $2) RETURNING *', [req.body.height, req.body.timestamp]);

  res.send('respond with a resource');
});

module.exports = router;
