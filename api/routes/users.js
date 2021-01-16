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

router.get('/login', function(req, res, next) {
  var pool = new pg.Pool(config);

  var username = req.body.username;
  var password = req.body.password;

  pool.query('SELECT username, email, age, country, current_level, current_xp FROM users WHERE username = $1 AND password = $2', [username, password], (err, results) => {
    if (err) {
      console.error('Error retrieving login details: ', err);
    }
    res.send(results.rows[0]);
  })
});

router.post('/add-friend', function(req, res, next) {
  var pool = new pg.Pool(config);

  var username = req.body.username;
  var friend = req.body.friend;

  pool.query('INSERT INTO friend_list (id, friend_id) VALUES ($1, $2)', [username, friend], (err, results) => {
    if (err) {
      console.error('Error adding a friend into list: ', err);
    }
    res.send(results);
  })
});

router.get('/get-friends', function(req, res, next) {
  var pool = new pg.Pool(config);

  var id = req.body.id;
  pool.query('SELECT * FROM users JOIN friend_list ON users.id=friend_list.friend_id AND friend_list.id=$1', [id], (err, results) => {
    if (err) {
      console.error('Error retrieving friends list: ', err);
    }
    var friend_ids = results;
    // console.log(friend_ids);
    res.send(friend_ids);
  })
});

router.post('/add', function(req, res, next) {
  var pool = new pg.Pool(config);

  // console.log(req.body);
  var username = req.body.username;
  var email = req.body.email;
  var age = req.body.age;
  var country = req.body.country;
  var current_level = req.body.current_level;
  var current_xp = req.body.current_xp;
  var password = req.body.password;

  pool.query('INSERT into users (username, email, age, country, current_level, current_xp, password) VALUES ($1, $2, $3, $4, $5, $6, $7);', [username, email, age, country, current_level, current_xp, password], (err, results) => {
    if (err) {
      console.log('Error inserting into users database: ', err);
    }
    res.send(results);
  })
});

router.post('/update', function(req, res, next) {
  var pool = new pg.Pool(config);

  // console.log(req.body);
  var username = req.body.username;
  var email = req.body.email;
  var age = req.body.age;
  var country = req.body.country;
  var current_level = req.body.current_level;
  var current_xp = req.body.current_xp;
  var password = req.body.password;

  pool.query('UPDATE users SET username = $1, email = $2, age = $3, country = $4, current_level = $5, current_xp = $6, password = $7 WHERE username = $1;', [username, email, age, country, current_level, current_xp, password], (err, results) => {
    if (err) {
      console.log('Error updating user in database: ', err);
    }
    res.send(results);
    })
  });

module.exports = router;