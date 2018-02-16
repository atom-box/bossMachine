const express = require("express");
const workRouter = express.Router();
const {getAllFromDatabase, getFromDatabaseById ,addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} = require("./db.js");
//const db = require("./db.js");
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
let workIdCounter = 155;

const fakeWork1 = { // JUST TODO
//TODO funtion is 'workGenesis'
    id: `${workIdCounter++}`,
    // TODO id is a string ??
    title: `yeah.  Luxuriate like a Regal mofo.`,
    description: 'Groom',
    hours: Math.floor(Math.random() * 8) + 1,
    minionId: `3456`,
  };


// obviously   not zero
workRouter.get("/:id", (req, res, next)=>{
	const id = req.params.id;
	const x = getFromDatabaseById("work", id);
	res.send(`We found ${x.description}! R U pleased?`);
	next();
} ) ;

workRouter.put("/work/", (req, res)=>{
	// TODO get real req.params.
	const x = addToDatabase("work" , fakeWork1);
	res(`It sent back this _${x}_`);
} );

console.log("On duty: workRouter!");
module.exports = workRouter;

// LEARNED -->  PORT is not visible here.
// console.log(`Greetings from ${PORT}!`);

