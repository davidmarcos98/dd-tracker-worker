var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await db.query('SELECT * FROM track');
  res.json(result.rows);
});

module.exports = router;
