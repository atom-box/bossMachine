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

const checkMillionDollarIdea = (req, res, next) => {
	// missing  400 
	// invalid string  400 (def of inv str?)
	// million-not 400
	// million-yes  callNext

	const [t, m] = [ req.body.numWeeks, req.body.weeklyRevenue]; 
	const prod = t * m;
	if( !t
	||
	!m
	||
	(prod < 1000000)
	||
	false
	){
		//console.log("}}}}}}}}}}}}}}}}}}}}}}}} big monkey Machine");
		req.status(400).send();
	}
	next(); // REACHES here ONLY if ideas good
}; 



// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
