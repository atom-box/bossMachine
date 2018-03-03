console.log(`& ideas router &`);
const {getAllFromDatabase, getFromDatabaseById ,addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require("./db.js");
const checkMillionDollarIdea = require("./checkMillionDollarIdea.js" );
const express = require("express");
const ideasRouter = express({mergeParams: true});

const bodyParser = require('body-parser');
ideasRouter.use(bodyParser.json());

//test
/*  ideasRouter( (req, res, next)=>{
	const x = new Error ("Dummy load.  Remove ASAP.  ideasRouter Line 11.");
	next(x);
});  */

/*   MY ROUTE works fine, better than the solution */
ideasRouter.get(`/`, (req, res, next) => {
	const x = new Error ("Dummy load.  Remove ASAP.  ideasRouter Line 11."); //***
	next(x); // ****
	let itWorked = undefined;
	itWorked = getAllFromDatabase("ideas");
	if (!itWorked){
		res.status(400);
		const sorrow = new Error("GET-ALL IDEE not working.");
		next(sorrow);
	} else {
		res.send(itWorked);
		next(); 
	}
} );

// if not working CHECK TYPE, IN 3rd line
ideasRouter.get("/:id", (req, res, next)=>{
	const id = req.params.id;
	const itFound = getFromDatabaseById("ideas", id);
	if (!itFound) {
		const sorrow = new Error("The server ID-parser didn't get anything");
		next(sorrow);
	} else {
		res.send(itFound);
		next();
	}
} );

ideasRouter.post("/", (req, res, next )=>{
	let victory = null;
	const sorrow = null;
	switch (checkMillionDollarIdea(idea)){
		case -3: 
			sorrow = new Error("Ideas router says Bug caused CMDI to reach end inconclusively.");
			next(err);
		case -2: 
			sorrow = new Error("Ideas router says negative number was input");
			next(err);
		case -1: 
			sorrow = new Error("Ideas router says non-number was passed to CMDI");
			next(err);
		case -0: 
			console.log(`Somehow, not sure how, need to display NOT A MILL DOLL IDEE.  To do . . .`);
	}
	victory = addToDatabase("ideas", req.body);
	if (victory){res.status(201).send(req.body);
	} else {
		res.status(400);
		sorrow = new Error("Did not post an idea; database interaction problem.");
		next(sorrow);
	}
} );

ideasRouter.put("/:id", (req, res, next)=>{
	let victory = null;
	victory = updateInstanceInDatabase("ideas", req.body);
	if (victory){
		res.send(victory); 
	} else {
		res.status(400);
		const sorrow = new Error("Failed to update idea -- i.d. might be missing.");
		next(sorrow);
	}
}  );

ideasRouter.delete("/:id", (req, res, next)=>{
	let victory = null;
	victory = deleteFromDatabasebyId("ideas", req.params.id);
	if (victory){res.send(victory) } else {
		sorrow = new Error("Deleting went less than ideally: failed to find idea by ID to delete.");
		next(sorrow);
	};
}  );

/*    ideasRouter.use( (err, req, res, next)=>{
	res.status(500);
	console.error(err);
	res.send("Ev's error, in the ideas level of routes.");
}   );  */




/******************************************/
/*    January 31, 2018 by Evan Genest     */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy              */
/*        https://github.com/atom-box  */
/**/
/***************************************/

console.log("ideas router present");



module.exports = ideasRouter;
