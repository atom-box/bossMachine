const express = require("express");
const workRouter = express.Router();
const {getAllFromDatabase, getFromDatabaseById ,addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} = require("./db.js");

console.log("Peter Gabriel: So.");
module.exports = workRouter;

// LEARNED -->  PORT is not visible here.
// console.log(`Greetings from ${PORT}!`);

