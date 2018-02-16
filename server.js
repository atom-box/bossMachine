/*************************************************/
/*        January 31, 2018 by Evan Genest        */
/* "Boss Machine" for "Build Your Own APIs"      */
/*          at Codecademy                        */
/*                       */
/**/
/*****************************************************/

// TODO: npm installs for these...
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
// TODO errorhandler is here in 4.2.3
console.log(`Line 15 in server.js.`);
// TODO -- wot's dis?
module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html


// Add middware for parsing request bodies here:


// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use(apiRouter);

// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, ()=> {
  	console.log(`Server is constant; listening on port # ${PORT}`)
  } )
}
