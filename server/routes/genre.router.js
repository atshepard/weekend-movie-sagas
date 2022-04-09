const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  let queryText = `SELECT "name" FROM "genres"
  ORDER BY "name" ASC;`;
  // Add query to get all genres
  pool.query(queryText)
  .then( result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get all movies', err);
    res.sendStatus(500)
  })
  
});

module.exports = router;