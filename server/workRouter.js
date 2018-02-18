/**************************************/
/*    January 31, 2018 by Evan Genest */
/**************************************/

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
// watchout!  id is a String 
workRouter.get("/:id", (req, res, next)=>{
	const id = req.params.id;
	let all, many, built, title;
	all = getAllFromDatabase("work"); // works
	many = all.length;
	// TITLE ONLY PART GIVING null 
 	gfdwID = getFromDatabaseById("work", id);
	console.log(`Told to find # ${id}`);
	console.log(`Came back with ${title}`);
	console.log(`The all[5] gives ${all[5]}`);
	const whatIs = typeof gfdwID;

	res.send(`Bueller...Bueller?   
		1 [${gfdwID.description} ], \n
		2 [ ${gfdwID.hours} ], \n \t
		3 [ ${gfdwID.title} ]

		`);

	/*res.send(`Parsing the incomings said "id" is ${id}.  The all[5]. title and id give ${all[5].title} & ${all[5].id} .  GFDW-id for _${id}_ gave _${gfdwID}_. Keys are [ ]What is it getting: [${whatIs}]\n\n See if this works:  `);*/
	next();
});


let workIdCounter = 155;
const fakeWork1 = { // JUST TODO
//TODO funtion is 'workGenesis'
    id: "",
    // TODO id is a string, asigned in function
    title: `Mayonnaise keychains.`,
    description: 'Sell co-branded, backpack size bottles of "Smart Mayonnaise".',
    hours: Math.floor(Math.random() * 8) + 1,
    minionId: `3456`,
};

workRouter.put("/api/minions/:minionId/work/:workId", (req, res, next)=>{
	let worked;
	worked = addToDatabase("work", fakeWork1);
	if(!worked){
		res.status(400).status("PUT didn't put.");
		return;
	} else{
		next();
	}
}  );


workRouter.put("/work/", (req, res)=>{
	// TODO get real req.params.
	const x = addToDatabase("work" , fakeWork1);
	res(`It sent back this _${x}_`);
} );

console.log("On duty: workRouter!");
module.exports = workRouter;

// LEARNED -->  PORT is not visible here.
// console.log(`Greetings from ${PORT}!`);


/******************************************/
/*    January 31, 2018 by Evan Genest     */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy              */
/*        https://github.com/atom-box  */
/**/
/***************************************/
