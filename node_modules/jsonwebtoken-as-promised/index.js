"use strict";

const jwt = require("jsonwebtoken");

Promise.prototype["finally"] = function (f) {
  return this.then(function (value) {
    return Promise.resolve(f()).then(function () {
      return value;
    });
  }, function (err) {
    return Promise.resolve(f()).then(function () {
      throw err;
    });
  });
};

module.exports = {
  decode: require("./src/decode"),
  verify: require("./src/verify"),
  sign: require("./src/sign"),
  JsonWebTokenError: jwt.JsonWebTokenError,
  NotBeforeError: jwt.NotBeforeError,
  TokenExpiredError: jwt.TokenExpiredError
};
