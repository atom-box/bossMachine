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
	const found = getFromDatabaseById("minions", id);
	if (found) {
		res.status(200).send(found);
	} else {
		res.status(404).send();
	}
} );

minionsRouter.put("/:id", (req, res, next)=>{
	const victory = updateInstanceInDatabase("minions", req.body);
	if (victory){
		res.status(201).send(victory); 
	} else {
		res.status(404).send();	
	}
}  );

minionsRouter.post("/", (req, res, next )=>{
	const victory = addToDatabase("minions", req.body);
	if (victory){
		res.status(201).send(victory);
	} else {
		res.status(404).send();
	}
} );

minionsRouter.delete("/:id", (req, res, next)=>{
	const victory = deleteFromDatabasebyId("minions", req.params.id);
	if ( Number(victory) && victory < 1){
		res.status(200).send(victory); 
	} else if (false){ //got an ID, nuttin there
		res.status(204).send();
	} else {
		res.status(404).send();
	}
});

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


