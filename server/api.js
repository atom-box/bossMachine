
const express = require('express');
const meetingsRouter =require("./meetingsRouter.js");
const ideasRouter = require("./ideasRouter.js");
const minionsRouter = require("./minionsRouter.js");
//const meetingsRouter = require("./meetingsRouter.js");

const apiRouter = express.Router();
console.log(`Line 23 in API.js.`);
apiRouter.use("/meetings", meetingsRouter);
apiRouter.use("/minions", minionsRouter);
apiRouter.use("/ideas", ideasRouter);
//apiRouter.use("/meetings", meetingsRouter);


module.exports = apiRouter;

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
