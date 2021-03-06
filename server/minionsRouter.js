/**************************************/
/*    February 18, 2018 by Evan Genest */
/**************************************/
const {getAllFromDatabase, getFromDatabaseById ,addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} = require("./db.js");
const express = require("express");
const minionsRouter = express({mergeParams: true});

const bodyParser = require('body-parser');
minionsRouter.use(bodyParser.json());


minionsRouter.get(`/`, (req, res, next) => {
	console.log("Minions  --------- GET");
	let itWorked = undefined;
	itWorked = getAllFromDatabase("minions");
	if (!itWorked){
		res.status(400);
		const sorrow = new Error("GET-ALL not working.");
		next(sorrow);
	} else {
		res.send(itWorked);
		//next(); 
	}
} );

minionsRouter.get("/:id", (req, res, next)=>{
	console.log("Minions  --------- GET");
	const id = req.params.id;
	const found = getFromDatabaseById("minions", id);
	if (found) {
		res.status(200).send(found);
	} else {
		res.status(404).send();
	}
} );

minionsRouter.put("/:id", (req, res, next)=>{
	console.log("Minions  --------- PUT");
	const victory = updateInstanceInDatabase("minions", req.body);
	if (victory){
		res.status(201).send(victory); 
	} else {
		res.status(404).send();	
	}
}  );

minionsRouter.post("/", (req, res, next )=>{
	console.log("Minions  --------- POST");
	const victory = addToDatabase("minions", req.body);
	if (victory){
		res.status(201).send(victory);
	} else {
		res.status(404).send();
	}
} );

minionsRouter.delete("/:minionsId", (req, res)=>{
	const id = req.params.minionsId;
	console.log(`Minions  -------R.P.ID${id}-- DELETE`);
	if(!Number(id)){
		console.log(`This _${id}_ is a bad, unNumberable string.`)
		res.status(404).send();
		return; // WHY??   WHY??

	}
	let victory = null;
	const thisMin = getFromDatabaseById("minions", id);
	if (thisMin){
		console.log(`passing in this-min, it is - -(((( ${Object.keys(thisMin)}))))_`);
		victory = deleteFromDatabasebyId("minions", thisMin.id);
		console.log(`VICTORY AFTER IS - - ${victory}`);
		if (victory){
			//res.status(200).send();
			console.log(`Victory flag says - - __${victory}__`);
			res.status(204).send();
			return; // WHY??   WHY??

		} else {
			console.log(`Victory flag says - - __${victory}__`);
			res.status(204).send();
			return;

		}
	} else {
		res.status(404).send(); //dsnt exist
		return; // WHY??   WHY??
	}

	console.log("Should never get here");
	res.status(111).send();
});



/*minionsRouter.use( (err, req, res, next)=>{
	console.log("Mal ----------------------- formed =========x======= input. Went to error throw-catch");
	res.status(419).send();
} );
*/


console.log("minions router present");
module.exports = minionsRouter;

/******************************************/
/*    January 31, 2018 by Evan Genest     */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy              */
/*        https://github.com/atom-box  */
/**/
/***************************************/


