/*************************************************/
/*        January 31, 2018 by Evan Genest        */
/* "Boss Machine" for "Build Your Own APIs"      */
/*          at Codecademy                        */
/*        https://github.com/atom-box               */
/**/
/*****************************************************/

// look 
// up things
// in 
// http://expressjs.com/th/api.html

const express = require('express');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
const workRouter =require("./workRouter.js");
//const ideasRouter = require("./ideasRouter.js");
const minionsRouter = require("./minionsRouter.js");
//const meetingsRouter = require("./meetingsRouter.js");

const apiRouter = express.Router();
console.log(`Line 23 in API.js.`);
//const logger = morgan('tiny');
apiRouter.use("/api/minions", minionsRouter);
//apiRouter.use("/ideas", ideasRouter);
//apiRouter.use("/meetings", meetingsRouter);
apiRouter.use("/work", workRouter);
apiRouter.get("/", (req, res, next)=>{
	console.log(`Parsed this in REQ: ${req.params}`);
	console.log("The NULL route worked, line 30, in api.js.");
	res.send("This is the boss machine, my friend.");
	next();
} );

apiRouter.get("/test", (req, res)=>{
	let n = 2;
	res.send(`Looks like the name is _${n}_ and the salary is "Pancho"`);
	next();
} );
apiRouter.use((req, res)=>{
	console.log("We no dinna find nuttin'.");
	res.status(404);
	res.redirect("http://www.thememo.com/wp-content/uploads/2016/02/happy-birthday-rick-astley-481x336.jpg");
	return;
} );


module.exports = apiRouter;
