/*************************************************/
/*        January 31, 2018 by Evan Genest        */
/* "Boss Machine" for "Build Your Own APIs"      */
/*          at Codecademy                        */
/*                       */
/**/
/*****************************************************/

// look 
// up things
// in 
// http://expressjs.com/th/api.html

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const workRouter =require("./workRouter.js");
const ideasRouter = require("./ideasRouter.js");
const minionsRouter = require("./minionsRouter.js");
const meetingsRouter = require("./meetingsRouter.js");

const apiRouter = express();
console.log(`Reporting for duty: "api".`);
const logger = morgan('tiny');
//apiRouter.use("/minions", minionsRouter);
//apiRouter.use("/ideas", ideasRouter);
//apiRouter.use("/meetings", meetingsRouter);
apiRouter.use("/work", workRouter);
apiRouter.get("/", (req, res, next)=>{
	res.send("This is the boss machine, my friend.")
	next();
} );

apiRouter.use((req, res)=>{
	console.log("We no dinna find nuttin'.");
	res.status(404).render("444000444...");
	res.redirect("https://giphy.com/search/rick-astley");

} );

apiRouter.listen(3000);

module.exports = apiRouter;
