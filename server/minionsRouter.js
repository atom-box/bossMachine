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
	itWorked = null;
	if (!itWorked){
		res.status(400);
		const sorrow = new Error("GET-ALL not working.");
		next(sorrow);
	} else {
		res.send(itWorked);
		next(); 
	}
} );

minionsRouter.use( (err, req, res, next)=>{
	res.status(500);
	console.error(err);
	res.send("Ev's error, in the min/wor/ide level of routes.");
}   );

/*
minionsRouter.get(`/:minionId`, (req, res, next)=>{
	let itWorked = undefined;
	itWorked = getFromDatabaseById(`minions`, minionId );
	if (!itWorked){
		res.status(400).send("Failed to find: One minion by ID.  Ev.");
		return;
	}else{
		res.send(itWorked);
		next();
	}
} );

	console.log(`Line 33, before POST...`);
minionsRouter.post(`/`, (req, res, next)=>{
	const itWorked = undefined;
	const minionIn = req.body;
	console.log(`minionIn, parse, contains: _${minionIn}_`);
	console.log(`Next line should say "In-variable-it-worked..."`);
	itWorked = addToDatabase(`minions`, minionIn );
	console.log(`In variable "itWorked": _${itWorked}_`);
}  );
console.log(`...line 42, after POST.`);

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


