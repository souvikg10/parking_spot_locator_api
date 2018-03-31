'use strict';
var util = require('util');
var uniqid = require('uniqid');
var admin = require("firebase-admin");


module.exports = {
  updatecartype: updatecartype
};

function updatecartype(req, res) {
// Import Admin SDK

// Get a database reference to our blog
var db = admin.database();
var user = req.body.uid;

var ref = db.ref("users/"+user);

  ref.update({
  "cartype": req.body.updatedata.cartype
}).then(function() {
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.json('Car Type updated');
  })
  .catch(function(error) {
  	res.setHeader('Access-Control-Allow-Origin', '*');
    res.json('Cannot update car type');
  });
    }