var path = require("path");
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/api/friends", function(req, res) {
    return res.json(friends);  
  });
  
  app.post("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  // Create New Characters - takes in JSON input
module.exports = function (app) {
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newFriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    characters.push(newFriend);
  
    res.json(newFriend);
  });
}