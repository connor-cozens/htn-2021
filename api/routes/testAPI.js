var express = require('express');
var router = express.Router();
var async = require('async');
var fs = require('fs');
var pg = require('pg');

var config = {
    user: 'alyshan',
    password: 'password1234',
    host: 'free-tier.gcp-us-central1.cockroachlabs.cloud',
    database: 'direct-weasel-217.defaultdb',
    port: 26257,
    ssl: {
        ca: fs.readFileSync('./certs/cc-ca.crt')
            .toString(),
    }
};

router.get('/', function(req, res, next) {
    // res.send('API is working properly');
    var pool = new pg.Pool(config);

    pool.connect(function (err, client, done) {

        var finish = function () {
            done();
            process.exit();
        };
    
        if (err) {
            console.error('could not connect to cockroachdb', err);
            finish();
        }

        async.waterfall([
            // function (next) {
            //     // Create the 'accounts' table.
            //     client.query('CREATE TABLE IF NOT EXISTS accounts (id INT PRIMARY KEY, balance INT);', next);
            // },
            // function (results, next) {
            //     // Insert two rows into the 'accounts' table.
            //     client.query('INSERT INTO accounts (id, balance) VALUES (1, 1000), (2, 250);', next);
            // },
            function (next) {
                // Print out account balances.
                client.query('SELECT id, balance FROM accounts;', next);
            },
        ],
        function (err, results) {
            if (err) {
                console.error('Error inserting into and selecting from accounts: ', err);
                finish();
            }

            console.log('Initial balances:');
            results.rows.forEach(function (row) {
                console.log(row);
            });
            res.send(results.rows);

            finish();
        });
    });
});

module.exports = router;