const express = require('express');
const meetingsRouter =require("./meetingsRouter.js");
const ideasRouter = require("./ideasRouter.js");
const minionsRouter = require("./minionsRouter.js");
const apiRouter = express({mergeParams: true});


apiRouter.use("/meetings", meetingsRouter);
apiRouter.use("/minions", minionsRouter);
apiRouter.use("/ideas", ideasRouter);
apiRouter.get('/', (req, res, next)=>{
	res.send("Come in. Come in to the API.")
}  );

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
