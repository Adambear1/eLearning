const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    bcrypt: true,
  },
  type: {
    type: String,
  },
});

const User = (module.exports = mongoose.model("User", UserSchema));

// Get User By Id
module.exports.getUserById = function (id, cb) {
  User.findById(id, cb);
};
// Get User By Username
module.exports.getUserByUsername = function (username, cb) {
  const query = { username: username };
  user.findOne(query, cb);
};

// Compare Password
module.exports.comparePassword = function (candidatePassword, hash, cb) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    cb(null, isMatch);
  });
};
// Create User
module.exports.saveStudent = function (newUser, newStudent, cb) {
  bcrypt.hash(newUser.password, 10, function (err, hash) {
    if (err) throw err;
    // Set Hash
    newUser.password = hash;
    async.parallel([newUser.save, newStudent.save], cb);
  });
};

// Create Instructor
module.exports.saveInstructor = function (newUser, newInstructor, cb) {
  bcrypt.hash(newUser.password, 10, function (err, hash) {
    if (err) throw err;
    // Set Hash
    newUser.password = hash;
    async.parallel([newUser.save, newInstructor.save], cb);
  });
};
