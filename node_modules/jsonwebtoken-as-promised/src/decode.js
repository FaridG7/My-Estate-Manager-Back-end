"use strict";

const jwt = require("jsonwebtoken");

function decode (token, options) {
  return jwt.decode(token, options);
}

module.exports = decode;
