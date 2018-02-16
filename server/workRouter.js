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

// obviously   not zero
workRouter.get("/:id", (req, res, next)=>{
	const id = req.params.id;
	let all, many, built, title;
	all = getAllFromDatabase("work"); // works
	many = all.length;
	/* for (let n=1; n < id; n++){
		title = getFromDatabaseById(n).title;
		built += title;
	}*/
	title = getFromDatabaseById(id);
	console.log(`Told to find # ${id}`);
	console.log(`Came back with ${title}`);
	console.log(`The all[5] gives ${all[5]}`);

	res.send(`We found ${many}! R U pleased? The all[5] gives ${all[5].description}. It has these [${title}].`);
	next();
});

// TODO remove.  Implement call to db.js
// TODO parse incoming
// TODO write the incoming
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


workRouter.put("/work/", (req, res)=>{
	// TODO get real req.params.
	const x = addToDatabase("work" , fakeWork1);
	res(`It sent back this _${x}_`);
} );

console.log("On duty: workRouter!");
module.exports = workRouter;

// LEARNED -->  PORT is not visible here.
// console.log(`Greetings from ${PORT}!`);

