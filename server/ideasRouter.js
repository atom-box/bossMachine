console.log(`& ideas router &`);
const {getAllFromDatabase, getFromDatabaseById ,addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require("./db.js");
// const checkMillionDollarIdea = require("./checkMillionDollarIdea.js" );
const express = require("express");
const ideasRouter = express({mergeParams: true});
const checkMillionDollarIdea = require("./checkMillionDollarIdea.js");
const bodyParser = require('body-parser');
ideasRouter.use(bodyParser.json());

//test
/*  ideasRouter( (req, res, next)=>{
	const x = new Error ("Dummy load.  Remove ASAP.  ideasRouter Line 11.");
	next(x);
});  */

/*   MY ROUTE works fine, better than the solution */
ideasRouter.get(`/`, (req, res) => {
	console.log("Line 19 IDEAS-RTR");
	const victory = getAllFromDatabase("ideas");
	if (victory ){
		res.status(200).send(victory);
	} else {
		res.status(404).send();
	}
} );

// if not working CHECK TYPE, IN 3rd line
ideasRouter.get("/:id", (req, res)=>{
	console.log("Line 29 IDEAS-RTR");
	const id = req.params.id;
	const victory = getFromDatabaseById("ideas", id);
	if (victory) {
		res.status(200).send(victory);
	} else {
		res.status(404).send();
	}
} );

ideasRouter.post("/", checkMillionDollarIdea , (req, res, next)=>{
	const victory = addToDatabase("ideas", req.body);
	if (victory){
		console.log("yay   o     o     o     o");
		res.status(201).send();
	} else {
		res.status(407).send();
	}

});

ideasRouter.put("/:id", (req, res)=>{
	const victory = updateInstanceInDatabase("ideas", req.body);
	if (victory){
		res.status(200).send(victory); 
	} else {
		res.status(404).send();
	}
}  );

ideasRouter.delete("/:id", (req, res)=>{
	const victory = deleteFromDatabasebyId("ideas", req.params.id);
	if (victory){
		res.status(204).send(victory); 
	} else {
		res.status(404).send();
	};
}  );


/******************************************/
/*    January 31, 2018 by Evan Genest     */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy              */
/*        https://github.com/atom-box  */
/**/
/***************************************/


module.exports = ideasRouter;
