// LOAD DATA
var friends = require("../data/friends.js");

// ROUTES
module.exports = function(app) {
  // Basic route that sends the user first to the AJAX Page
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  // app.post("/api/friends", function(req, res) {
  //   console.log("TBD");
  // });
};
