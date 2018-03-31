'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var cors = require('cors')
var admin = require("firebase-admin");

var serviceAccount = require(process.cwd()+"/config/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://parking-share-3095b.firebaseio.com"
});
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};
app.use(cors());
SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3001;
  app.listen(port);

});
