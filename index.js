"use strict"

module.exports = (string, iteratee) => string.split("").map((value, index) => iteratee(value, index, string)).join("")
