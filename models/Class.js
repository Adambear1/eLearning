const mongoose = require("mongoose");
const ClassSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  instructor: {
    type: String,
  },
  lessons: [
    {
      lesson_number: { type: Number },
      lesson_title: { type: String },
      lesson_body: { type: String },
    },
  ],
});

const Class = (module.exports = mongoose.model("Class", ClassSchema));

// Fetch All
module.exports.getClasses = function (cb, limit) {
  Class.find(cb).limit(limit);
};
// Fetch One
module.exports.getClassById = function (id, cb) {
  Class.FindById(id, cb);
};
