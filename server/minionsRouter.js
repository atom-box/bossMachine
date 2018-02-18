/**************************************/
/*    February 18, 2018 by Evan Genest */
/**************************************/
const {getAllFromDatabase, getFromDatabaseById ,addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} = require("./db.js");
//unless I hear otherwise THIS SYNTAX JUST AS GOOD:
express = require("express");
minionsRouter = express();

minionsRouter.get(`/api/minions`, (req, res, next) => {
	let itWorked = undefined;
	itWorked = getAllFromDatabase("minions");
	if (!itWorked){
		res.status(400).send("Found less than ALL minions; found none.  GET failed.");
		return;
	} else {
		res.send(itWorked);
		next(); 
	}
} );

minionsRouter.get(`/api/minions/:minionId`, (req, res, next)=>{
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

minionsRouter.post(`/api/minions`, (req, res, next)=>{
	itWorked = addToDatabase(`minions`, minionId );

}  );

console.log("minions router present");
module.exports = minionsRouter;

/******************************************/
/*    January 31, 2018 by Evan Genest     */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy              */
/*        https://github.com/atom-box  */
/**/
/***************************************/


