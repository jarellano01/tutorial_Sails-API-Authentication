var
  jwt = require('jsonwebtoken'),
  tokenSecret = "superdupercrazysecrete";

// Generates a token from supplied payload
module.exports.issue = function(payload) {
  return jwt.sign(
    payload,
    tokenSecret, // Token Secret that we sign it with
    {
      expiresIn : 180 // Token Expire time
    }
  );
};

// Verifies token on a request
module.exports.verify = function(token, callback) {
  jwt.verify(
    token,
    tokenSecret,
    {},
    callback
  );
};
