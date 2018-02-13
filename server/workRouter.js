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
	const id = req.params.id;
	const x = getFromDatabaseById("work", id);
	res.send(`We found ${x.description}! R U pleased?`);
	next();
} ) ;

workRouter.put("???", (req, res)=>{
	const OBJECT SOMEHOW ???
	addToDatabase("/work/" , OBJECT);
} );

console.log("On duty: workRouter!");
module.exports = workRouter;

// LEARNED -->  PORT is not visible here.
// console.log(`Greetings from ${PORT}!`);

