'use strict';
var util = require('util');
var uniqid = require('uniqid');
var admin = require("firebase-admin");



module.exports = {
  shareLocation: shareLocation
};

function shareLocation(req, res) {
 // Import Admin SDK

// Get a database reference to our blog
var db = admin.database();
var timestamp = new Date().getTime();
var ref = db.ref("locations/"+timestamp);


ref.set({
	location:req.body.location,
	timestamp:timestamp,
	user: req.body.user,
	cartype: req.body.cartype
}).then(function() {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json('Synchronization succeeded');
  })
  .catch(function(error) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json('Synchronization failed');
  });;
}
