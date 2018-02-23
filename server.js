/****************************************/
/*        January 31, 2018 by Evan Genest  */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy                  */
/*                                         */
/***************************************/

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors);
app.use(morgan('tiny'));
// TODO errorhandler is here in 4.2.3
console.log(`Line 15 in server.js.`);
// TODO -- wot's dis?
module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/

//console.log(`HERE IS PROCESS DOT ENV keys:${Object.keys(process.env)} evanARTHUR`);
//let envKeys =[];
//let x = "";
//envKeys = Object.keys(process.env);
//for (x in envKeys){
//	console.log(`[${x}] is: ${process.env[x]}.`);
//}
const PORT = process.env.PORT || 4001;
app.use(bodyParser);
// Add middleware for handling CORS requests from index.html


// Add middware for parsing request bodies here:
// TEMP EVAN
const {getAllFromDatabase, getFromDatabaseById ,addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase} = require("./server/db.js");
app.get(`/api/ideas/`, (req, res, next) => {
	console.log(`This console log worked, inside the IDEAS ROUTE`);
	let itWorked = undefined;
	itWorked = getAllFromDatabase("ideas");
	res.send(itWorked);
} );

/*	if (!itWorked){
		res.status(400).send("Found less than ALL minions; found none.  GET failed.");
		return;
	} else {
		res.send(itWorked);
		next(); 
	}
} );

app.get("api/minions/:id", (req, res, next)=>{
	res.send(`They want ${req.params.id} or maybe ${id}.`);
	next();
} );
*/

// Mount your existing apiRouter below at the '/api' path.
// UNCOMMENT!   const apiRouter = require('./server/api.js');
// UNCOMMENT! app.use("/api", apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, ()=> {
  	console.log(`Server is constant; listening on port # ${PORT}`)
  } )
}
