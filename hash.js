const bcrypt = require("bcryptjs");

bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash("B4c0//", salt, function(err, hash) {
    console.log("Salt:", salt);
    console.log("Hash:", hash);
  });
});
