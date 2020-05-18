const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => { // 
    // YOUR CODE HERE
    const queryText = 
    `SELECT "species_name", "class_name" FROM "species"
    JOIN "class" ON "species".class_id = "class".id;`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error selecting animal query', err);
            res.sendStatus(500);
        });
});

module.exports = router;