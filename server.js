// DEPENDENCIES
var express = require("express");

// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 3000;

//-- Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CONNECTING THE MIDDLEWARE FILES 

app.use(express.static(".app/public")); 


// ROUTER
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



// LISTENER
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });