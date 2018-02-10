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
const ideasRouter = require("./ideasRouter.js");
const minionsRouter = require("./minionsRouter.js");
const apiRouter = express();
console.log(`Reporting for duty: "api".`);

apiRouter.use("/ideas/", ideasRouter);
apiRouter.get("/", (req, res, next)=>{
	res.send("This is the boss machine, mother-fucker. ( 2 words?) ")
	next();
} );

apiRouter.use((req, res)=>{
	console.log("We no dinna find nuttin'.");
	res.status(404).render("444000444...");
	res.redirect("https://giphy.com/search/rick-astley");

} );

apiRouter.listen(3000);

module.exports = apiRouter;
