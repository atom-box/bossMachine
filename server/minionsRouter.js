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

minionsRouter.delete("/:id", (req, res, next)=>{
	console.log("Minions  --------- DELETE");
	if(!Number(id)){
		console.log(`Bad unNumberable string.`)
		next(new Error('badString'));
	}
	const victory = getFromDatabaseById("minions", req.params.id);
	if (victory){
		res.status(201).send();
	} else {
		res.status(204).send();
	} 
	console.log("Should never get here");
	res.status(111).send();

});



minionsRouter.use( (err, req, res, next)=>{
	console.log("Mal ----------------------- formed =========x======= input. Went to error throw-catch");
	res.status(419).send();
} );



console.log("minions router present");
module.exports = minionsRouter;

/******************************************/
/*    January 31, 2018 by Evan Genest     */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy              */
/*        https://github.com/atom-box  */
/**/
/***************************************/


