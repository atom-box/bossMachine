/**************************************/
/*    February 18, 2018 by Evan Genest */
/**************************************/
console.log(`...that is all.`);


const {getAllFromDatabase, getFromDatabaseById ,addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} = require("./db.js");
//unless I hear otherwise THIS SYNTAX JUST AS GOOD:
express = require("express");
minionsRouter = express();

/*
minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});
*/

/*   MY ROUTE works fine, better than the solution */
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

// if not working CHECK TYPE, IN 3rd line
minionsRouter.get("/:id", (req, res, next)=>{
	const id = req.params.id;
	const itFound = getFromDatabaseById("minions", id);
	if (!itFound) {
		const sorrow = new Error("The server ID-parser didn't get anything");
		next(sorrow);
	} else {
		res.send(itFound);
		next();
	}
} );

minionsRouter.post("/", (req, res, next )=>{
	const victory = null;
	const sorrow = null;
	victory = addToDatabase("minions", req.body);
	if (victory){res.status(201).send(req.body);
	} else {
		res.status(400);
		sorrow = new Error("Found no Minion.");
		next(sorrow);
	}
} );

minionsRouter.put("/:id", (req, res, next)=>{
	const victory = null;
	victory = updateInstanceInDatabase("minions", req.body);
	if (victory){
		res.send(victory); 
	} else {
		res.status(400);
		const sorrow = new Error("Failed to update minion -- i.d. might be missing.");
		next(sorrow);
	}
}  );

minionsRouter.delete("/:id", (req, res, next)=>{
	const victory = null;
	victory = deleteFromDatabasebyId("minions", req.params.id);
	if (victory){res.send(victory) } else {
		sorrow = new Error("Deleting went less than ideally; failed to find something to delete.");
		next(sorrow);
	};
}  );

// Superfluous to Minions routes
minionsRouter.delete("/", (req, res, next)=>{
	const victory = null;
	victory = deleteAllFromDatabase("minions"  );
} );

minionsRouter.use( (err, req, res, next)=>{
	res.status(500);
	console.error(err);
	res.send("Ev's error, in the min/wor/ide level of routes.");
}   );



console.log("minions router present");
module.exports = minionsRouter;

/******************************************/
/*    Feb 24, 2018 by Evan Genest     */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy              */
/*        https://github.com/atom-box  */
/**/
/***************************************/


