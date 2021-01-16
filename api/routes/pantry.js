var express = require('express');
var router = express.Router();
var async = require('async');
var fs = require('fs');
var pg = require('pg');

var config = {
    user: 'alyshan',
    password: 'password1234',
    host: 'free-tier.gcp-us-central1.cockroachlabs.cloud',
    database: 'direct-weasel-217.food_app',
    port: 26257,
    ssl: {
        ca: fs.readFileSync('./certs/cc-ca.crt')
            .toString(),
    }
};

router.get('/get_recipe', function(req, res, next) {
  var pool = new pg.Pool(config);

  console.log(req.body);

  pool.connect(function (err, client, done) {

      var finish = function () {
          done();
      };
  
      if (err) {
          console.error('could not connect to cockroachdb', err);
          finish();
      }

      async.waterfall([
          function (next) {
              // Print out account balances.
              client.query('SELECT username, email, age, country, current_level, current_xp FROM users WHERE username = $1 AND password = $2', [username, password], next);
          },
      ],
      function (err, results) {
          if (err) {
              console.error('Error inserting into and selecting from accounts: ', err);
              finish();
          }
          res.send(results.rows[0]);
      });
  });
});

router.post('/add_recipe', function(req, res, next) {
  var pool = new pg.Pool(config);

  console.log(req.body);

  pool.connect(function (err, client, done) {
    var finish = function() {
      done();
    };
    if (err) {
      console.error('Could not connect to corkroachdb', err);
      finish();
    }

    async.waterfall([
      function(next) {
        client.query('INSERT into users (username, email, age, country, current_level, current_xp, password) VALUES ($1, $2, $3, $4, $5, $6, $7);', [username, email, age, country, current_level, current_xp, password], next);
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