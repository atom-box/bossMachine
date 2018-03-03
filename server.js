/****************************************/
/*        January 31, 2018 by Evan Genest  */
/* "Boss Machine" for "Build Your Own APIs"*/
/*          at Codecademy                  */
/*                                         */
/***************************************/
console.log(`Hubba...`);

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(morgan('tiny'));

// TODO errorhandler is here in 4.2.3
console.log(`Line 15 in server.js.`);

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/


const PORT = process.env.PORT || 4001;
// Add middleware for handling CORS requests from index.html
app.use(cors());


// Add middware for parsing request bodies here:

app.use(bodyParser.json());
// Mount your existing apiRouter below at the '/api' path.

const apiRouter = require('./server/api.js');
app.get("/", (req, res)=>{
	res.send("This is the Boss Machine, my friend.")
} );
app.use("/api", apiRouter);

app.use((err, req, res, next)=>{
	console.err(err);
	next(err);
} );

app.use((err, req, res, next)=>{
	res.status(468);
	res.send("Bad things happen to good people; server.js line 47.  Check the console.");
} );


// TODO -- originally up on top, like LINE EIGHTEEN ??
module.exports = app;


// This conditional is here for testing purposes:
if (!module.parent) { 
  // Add your code to start the server listening at PORT below:
  app.listen(PORT, ()=> {
  	console.log(`Server is constant; listening on port # ${PORT}`)
  } )
}
