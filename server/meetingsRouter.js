/**************************************/
/*    February 24, 2018 by Evan Genest */
/**************************************/

const {getAllFromDatabase, addToDatabase,  deleteAllFromDatabase} = require("./db.js");
//unless I hear otherwise THIS SYNTAX JUST AS GOOD:
express = require("express");
meetingsRouter = express();


/*   MY ROUTE works fine, better than the solution */
meetingsRouter.get(`/`, (req, res, next) => {
	let itWorked = undefined;
	itWorked = getAllFromDatabase("meetings");
	if (!itWorked){
		res.status(400);
		const sorrow = new Error("GET-ALL not working in meetings route.");
		next(sorrow);
	} else {
		res.send(itWorked);
		next(); 
	}
} );

meetingsRouter.post("/", (req, res, next )=>{
	const victory = null;
	const sorrow = null;
	victory = addToDatabase("meetings", req.body);
	if (victory){res.status(201).send(req.body);
	} else {
		res.status(400);
		sorrow = new Error("Failed to post meeting.");
		next(sorrow);
	}
} );


meetingsRouter.delete("/", (req, res, next)=>{
	const victory = null;
	victory = deleteAllFromDatabase("meetings"  );
} );

meetingsRouter.use( (err, req, res, next)=>{
	res.status(500);
	console.error(err);
	res.send("Ev's error, in the meetings level of routes.");
}   );

console.log("meetings router present");
module.exports = meetingsRouter;

/******************************************/
/*    Feb 24, 2018 by Evan Genest     */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy              */
/*        https://github.com/atom-box  */
/**/
/***************************************/


