const express = require('express');
const ideasRouter = express.Router();
console.log(`Reporting for duty: "ideasRouter".`);
// the following utils are totally from a codec lesson
const { getElementById, getIndexById, updateElement, seedElements, createElement } = require('./utilsCA.js');



let ideas = ["Pigs with wings.", "Solid gold toilets", "Newsradio with POTUS-45-mute function"];


ideasRouter.get("/", (req, res, next)=>{
	res.send(`How about these:  {ideas} ?`);
	next();
}  );

// This route works
ideasRouter.get("/0", (req, res, next)=>{
	//let n = parseInt(req.params.id); // add 10 ?
	let n = 0;
	console.log(`Parsed this --${n}--` );
	res.send(`My fave idea is ${ideas[n]}`);
	return;
} );

// This route does not
ideasRouter.get("/:id", (req, res, next)=>{
	let n = parseInt(req.params.id, 10); // add 10 ?
	console.log(`Parsed this --${n}--` );
	res.send(`My fave idea is ${ideas[n]}`);
	return;
} );


module.exports = (ideasRouter);
