'use strict';
var util = require('util');
var uniqid = require('uniqid');
var admin = require("firebase-admin");


module.exports = {
  getUserByID: getUserByID
};

function getUserByID(req, res) {
// Import Admin SDK

// Get a database reference to our blog
var db = admin.database();
var user = req.swagger.params.userID.value;

var ref = db.ref("users/");

ref.child(user).once("value", function(snapshot) {
  
    if(snapshot.val() == null){
      res.json("No data found")
    }
    else
    {
      if(snapshot.val().uid == user){
      var response = 
      {
        username: snapshot.val().username,
        email: snapshot.val().email,
        photoURL: snapshot.val().photoURL,
        uid: snapshot.val().uid,
        cartype:snapshot.val().cartype
      }
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json(response);

    }
    else{
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.json("No user found")

    }
    }
    

  
  


}, function (errorObject) {
  res.json("No user found");
}); 
}

