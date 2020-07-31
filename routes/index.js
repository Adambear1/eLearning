var express = require("express");
var router = express.Router();

const Class = require("../models/class");

/* GET home page. */
router.get("/", function (req, res, next) {
  Class.getClasses(function (err, classes) {
    res.render("classes/index", { classes: classes }, 3);
  });
});

module.exports = router;
