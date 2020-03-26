// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members/:filterValue", isAuthenticated, function(req, res) {
    db.Posts.findAll().then(result => {
      if (req.params.filterValue !== undefined) {
        filterValue = req.params.filterValue
      }
      let reversedList = result.reverse();
      let filteredList = reversedList.filter(item => item.category === filterValue);
      res.render(path.join(__dirname, "../views/index.handlebars"), {posts: filteredList});
    });
  });

  app.get("/members", isAuthenticated, function(req, res) {
    db.Posts.findAll().then(result => {
      res.render(path.join(__dirname, "../views/index.handlebars"), {posts: result});
    });
  });

};

