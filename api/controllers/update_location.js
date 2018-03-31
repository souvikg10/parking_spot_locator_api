'use strict';
var util = require('util');
var uniqid = require('uniqid');
var admin = require("firebase-admin");


module.exports = {
  updatelocationaccuracy: updatelocationaccuracy
};

function updatelocationaccuracy(req, res) {
// Import Admin SDK

// Get a database reference to our blog
var db = admin.database();
var location = req.body.uid;

var ref = db.ref("locations/"+location);

  ref.update({
  "locationfound": req.body.updatedata.locationfound,
  "accuracyProvider":req.body.updatedata.user
}).then(function() {
    res.json('Location Accuracy updated');
    res.setHeader('Access-Control-Allow-Origin', '*');

  })
  .catch(function(error) {
  	res.setHeader('Access-Control-Allow-Origin', '*');
    res.json('Cannot update location accuracy');
  });
    }