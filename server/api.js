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
const apiRouter = express.Router();
console.log(`Reporting for duty: "api".`);


module.exports = apiRouter;
