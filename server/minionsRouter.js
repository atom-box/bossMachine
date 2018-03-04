/**************************************/
/*    February 18, 2018 by Evan Genest */
/**************************************/
console.log(`& minions router &`);

const {getAllFromDatabase, getFromDatabaseById ,addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} = require("./db.js");
//unless I hear otherwise THIS SYNTAX JUST AS GOOD:
const express = require("express");
const minionsRouter = express({mergeParams: true});

const bodyParser = require('body-parser');
minionsRouter.use(bodyParser.json());


minionsRouter.get(`/`, (req, res, next) => {
	let itWorked = undefined;
	itWorked = getAllFromDatabase("minions");
	if (!itWorked){
		res.status(400);
		const sorrow = new Error("GET-ALL not working.");
		next(sorrow);
	} else {
		res.send(itWorked);
		next(); 
	}
} );

minionsRouter.get("/:id", (req, res, next)=>{
	const id = req.params.id;
	let found = getFromDatabaseById("minions", id);
	if (!found) {
		res.status(404).send();
	} else {
		res.send(found);
	}
} );



minionsRouter.put("/:id", (req, res, next)=>{
	let victory = null;
	victory = updateInstanceInDatabase("minions", req.body);
	if (victory){
		res.send(victory); 
	} else {
		res.status(400);
		const sorrow = new Error("Failed to update minion -- i.d. might be missing.");
		next(sorrow);
	}
}  );

minionsRouter.post("/", (req, res, next )=>{
	let victory = null;
	let sorrow = null;
	victory = addToDatabase("minions", req.body);
	if (victory){res.status(201).send(req.body);
	} else {
		res.status(400);
		sorrow = new Error("Did not post a minion; database interaction problem.");
		next(sorrow);
	}
} );

minionsRouter.delete("/:id", (req, res, next)=>{
	let victory = null;
	victory = deleteFromDatabasebyId("minions", req.params.id);
	if (victory){
		console.log(`Minion found: [${victory.id}].`)
		res.status(333).send(victory); 
	} else {

		res.status(204).send();
	};
}  );

/* Superfluous to Minions routes
minionsRouter.delete("/", (req, res, next)=>{
	const victory = null;
	victory = deleteAllFromDatabase("minions"  );
} ); */

minionsRouter.use( (err, req, res, next)=>{
	res.status(465);
	console.error(err);
	res.send("Not found in minionsRouter #83.");
}   );



console.log("minions router present");
module.exports = minionsRouter;

/******************************************/
/*    January 31, 2018 by Evan Genest     */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy              */
/*        https://github.com/atom-box  */
/**/
/***************************************/


