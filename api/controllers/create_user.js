'use strict';
var util = require('util');
var uniqid = require('uniqid');
var admin = require("firebase-admin");



module.exports = {
  createUser: createUser
};

function createUser(req, res) {
// Import Admin SDK

// Get a database reference to our blog
var db = admin.database();
var user = req.body.uid;
var ref = db.ref("users/"+user);
ref.set({
	username:req.body.username,
	email:req.body.email,
	photoURL:req.body.photoURL,
	uid: user
}).then(function() {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json('User added');
  })
  .catch(function(error) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json('Cannot create user');
  });;
}