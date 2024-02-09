"use strict";

const jwt = require("jsonwebtoken");

function sign (payload, secretOrPrivateKey, options) {
  return new Promise(function (fulfill, reject) {
    jwt.sign(payload, secretOrPrivateKey, options, function (err, token) {
      if (err) reject(err);
      fulfill(token);
    });
  });
}

module.exports = sign;
