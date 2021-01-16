var express = require('express');
var router = express.Router();
var async = require('async');
var fs = require('fs');
var pg = require('pg');

var config = {
    user: 'alyshan',
    password: 'password1234',
    host: 'free-tier.gcp-us-central1.cockroachlabs.cloud',
    database: 'direct-weasel-217.bank',
    port: 26257,
    ssl: {
        ca: fs.readFileSync('./certs/cc-ca.crt')
            .toString(),
    }
};

router.get('/', function(req, res, next) {
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
            function (next) {
                // Print out account balances.
                client.query('SELECT * FROM users', next);
            },
        ],
        function (err, results) {
            if (err) {
                console.error('Error inserting into and selecting from accounts: ', err);
                finish();
            }
            res.send(results.rows);
        });
    });
});

router.post('/', function(req, res, next) {
  var pool = new pg.Pool(config);

  pool.connect(function (err, client, done) {
    var finish = function() {
      done();
      process.exit();
    };
    if (err) {
      console.error('Could not connect to corkroachdb', err);
      finish();
    }

    async.waterfall([
      function(next) {
        client.query("INSERT into users (email, age, country, current_level, current_xp) VALUES ('cozcon@gmail.com', 75, 'Connor', 1,0);", next);
      },
    ],
    function (err, results) {
      if (err) {
        console.log('Error inserting into users database: ', err);
        finish();
      }
      res.send(results);
    });
  });
});

module.exports = router;