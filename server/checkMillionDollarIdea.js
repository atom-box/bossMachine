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

const checkMillionDollarIdea = (weeks, rate) => {
	const net = weeks * rate;
	if (!net){
		const sorrow = new Error("Idea rate and/or weeks must both be a 'number'.");
		req.status(409);
		return -1; //  non numeric input!
	}
	if (weeks <= 0 || rate <= 0){
		const sorrow = new Error("Idea rate and/or weeks must both be positive #s.");
		req.status(409);
		return -2; // 	 negative input # !	
	} 
	if (net < 1000000){
		req.status(209);
		return 0; //  not a million $ idea!		
	} 
	if (net >= 1000000){
		return 1; // 		
	} 
	console.log("Line 33 bug in CMDI");
	return -3; // should never reach here!   
}; // error flags are, in order checked
// -1 a non number in input
// -2 a negative number in input
// 0 not a million dollar idea
// 1  SUCCESS!   MDI !
// -3 oops, ran past everything; code bug!

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
