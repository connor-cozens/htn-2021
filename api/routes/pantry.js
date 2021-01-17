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
/*
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
*/
router.get('/recipe', function(req, res, next) {
  var pool = new pg.Pool(config); 
  var recipe_ud = req.body.recipe_ud; //note the type lol i fucked up when i made the database
  var recipe_name = req.body.recipe_name; 

  pool.query('SELECT recipe_name, xp, recipe_link, imageurl FROM recipes WHERE recipe_ud = $1 AND recipe_name=$2',[recipe_ud,recipe_name], (err, results) => {
    if (err) {
      console.error('Error retrieving recipe: ', err);
    }
    res.send(results.rows[0]);
  })
});
/*
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
*/
router.post('/addrecipe', function(req, res, next) {
  var pool = new pg.Pool(config);
  var recipe_name = req.body.recipe_name;
  var xp = req.body.xp; 
  var recipe_link = req.body.recipe_link; 
  var imageurl = req.body.imageurl; 
    pool.query('INSERT into recipes (recipe_name, xp, recipe_link, imageurl) VALUES ($1, $2, $3, $4)', [recipe_name, xp, recipe_link, imageurl], (err, results) => {
    if(err) {
      console.error('Error adding recipe: ', err); 
    }
    res.send(results.rows[0]);
  })
});

router.post('/add_ingredients', function(req, res, next) {
  var pool = new pg.Pool(config); 
  var recipe_id = req.body.recipe_id; 
  var food_item = req.body.food_item; 

  pool.query('INSERT into ingredients (recipe_id, food_item) VALUES ($1, $2)',[recipe_id, food_item], (err, results) => {
    if (err) {
      console.error('Error adding ingredients: ', err); 
    }
    res.send(results.rows[0]); 
  })
});



router.get('/get_ingredients', function(req, res, next) {
  var pool = new pg.Pool(config);
  var recipe_id = req.body.recipe_id; 

  pool.query(`SELECT food_item FROM ingredients WHERE recipe_id=\'${recipe_id}\'`, (err, results) => {
    if(err) {
      console.error('Error getting ingredients: ', err);
    }
    res.send(results.rows[0]);
  })
});
module.exports = router;