"use strict";

const jwt = require("jsonwebtoken");

function verify (token, secretOrPublicKey, options) {
  return new Promise(function (fulfill, reject) {
    jwt.verify(token, secretOrPublicKey, options, function (err, decoded) {
      if (err) reject(err);
      fulfill(decoded);
    });
  });
}

module.exports = verify;
