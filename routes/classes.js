var express = require("express");
var router = express.Router();

const Class = require("../models/class");

/* Classes Page. */
router.get("/", function (req, res, next) {
  if (err) throw err;
  Class.getClasses(function (err, classes) {
    res.render("index", { classes: classes }, 3);
  });
});

/* Details. */
router.get("/:id/details", function (req, res, next) {
  if (err) throw err;
  Class.getClassById([req.params.id], function (err, classname) {
    res.render("classes/details", { class: classname });
  });
});

module.exports = router;
