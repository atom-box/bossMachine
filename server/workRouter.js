const express = require("express");
const workRouter = express.Router();
const {getAllFromDatabase, getFromDatabaseById ,addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} = require("./db.js");
const db = require("./db.js");
workRouter.get("/",(req, res, next)=>{
	console.log("easiest route ever -- in work, '/'")
	const w = getAllFromDatabase("work");
	if (!w) {
		res.status(400);
	} else {
		res.send(w);
	}
	next();
} );

// obviously   not zero
workRouter.get("/:id", (req, res, next)=>{
	const x = db.allWork.data[0];
	res.send(x);
} ) ;


console.log("On duty: workRouter!");
module.exports = workRouter;

// LEARNED -->  PORT is not visible here.
// console.log(`Greetings from ${PORT}!`);

