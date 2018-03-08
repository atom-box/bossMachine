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
if(true
	&&
	true
	&&
	true){
	console.log("Weird -- stack ...  WORKS ! ! ! ! ! ! ! ! ! ! ");
	return;
	}
	result = bucks * weeks;
	if (!result){
		req.status(499).send();
	}
	if (weeks <= 0 || rate <= 0){
		const sorrow = new Error("Idea rate and/or weeks must both be positive #s.");
		req.status(488);
		next(sorrow);
		return -2; // 	 negative input # !	
	} 
	if (net < 1000000){
		req.status(209).send();
	} 
	if (net >= 1000000){
		req.status(200).send(result); // 		
	} 
}; // error flags are, in order checked
// -1 a non number in input
// -2 a negative number in input
// 0 not a million dollar idea
// 1  SUCCESS!   MDI !
// -3 oops, ran past everything; code bug!

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
