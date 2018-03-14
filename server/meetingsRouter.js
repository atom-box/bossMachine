/**************************************/
/*    February 24, 2018 by Evan Genest */
/**************************************/
console.log(`& meetings router &`);


const {getAllFromDatabase, addToDatabase,  deleteAllFromDatabase, createMeeting} = require("./db.js");
//unless I hear otherwise THIS SYNTAX JUST AS GOOD:
const express = require("express");
const meetingsRouter = express({mergeParams: true});

const bodyParser = require('body-parser');
meetingsRouter.use(bodyParser.json());


/*   MY ROUTE works fine, better than the solution */
meetingsRouter.get(`/`, (req, res, next) => {
	let itWorked = undefined;
	itWorked = getAllFromDatabase("meetings");
	if (!itWorked){
		res.status(400).send();
	} else {
		res.status(200).send(itWorked);
	}
} );

meetingsRouter.post("/", (req, res, next)=>{
	let victory = null;
	const newMeeting = createMeeting();
	victory = addToDatabase("meetings", newMeeting );
	if (victory){
		res.status(201).send(victory);
	}else{
		res.status(405).send();
	}
} );

meetingsRouter.delete("/",(req, res, next)=>{
	let victory = null;
	victory = deleteAllFromDatabase("meetings");
	if (victory){
		res.status(204).send(victory);
	}else{
		res.status(406).send();
	}
} );
/*
meetingsRouter.post("/", (req, res, next )=>{
	let victory = null;
	let sorrow = null;
	console.log(`Evan line34 MEETINGS -> <<${Object.keys(req.params)}>>`);
	victory = addToDatabase("meetings", req.body);
	if (victory){res.status(201).send(req.body);
	} else {
		res.status(400);
		sorrow = new Error("Failed to post meeting.");
		next(sorrow);
	}
} );


meetingsRouter.delete("/", (req, res, next)=>{
	let victory = null;
	victory = deleteAllFromDatabase("meetings"  );
} );
*/

meetingsRouter.use( (err, req, res, next)=>{
	res.status(555);
	console.error(err);
	res.send("Ev's error, in the meetings level of routes.");
}   );

//  CATCH    THE  DUDE NOT FOUND

console.log("meetings router present");
module.exports = meetingsRouter;

/******************************************/
/*    Feb 24, 2018 by Evan Genest     */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy              */
/*        https://github.com/atom-box  */
/**/
/***************************************/


