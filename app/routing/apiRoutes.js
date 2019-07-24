// LOAD DATA
var friends = require("../data/friends.js");

// ROUTES
module.exports = function(app) {
  
  // Basic route that sends the user first to the AJAX Page
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body
    // console.log(newFriend);
    var newScore = [];
    for (i=0; i<newFriend.scores.length; i++) {
      var newNum = newFriend.scores[i];
      newScore[i] = parseInt(newNum);
    }
    newFriend.scores = newScore;
    console.log(newScore);
    console.log(friends[0].scores);

    var match = {
      name:"",
      photo:"",
      diff: 250
    };

    for (i = 0; i < friends.length; i++) {
        var currentFriend = friends[i]
        var totalDiff = 0;
        // console.log(currentFriend)
        console.log("checking "+currentFriend.name);

      for (j = 0; j < currentFriend.scores.length; j++) {
        totalDiff += Math.abs(parseInt(newScore[j]) - parseInt(currentFriend.scores[j]));
      }
      console.log("total difference with "+currentFriend.name+" is "+totalDiff);
      if (totalDiff <= match.diff) {
        match.name = currentFriend.name;
        match.photo = currentFriend.photo;
        match.diff = totalDiff;
        console.log(currentFriend.name + " is the new current match");
      }
      console.log(match.diff + "\n");      
    };
    // console.log(match);
    friends.push(newFriend);
    // console.log(friends);
    res.json(match);
  });
};
