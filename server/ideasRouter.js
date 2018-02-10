const express = require('express');
const ideasRouter = express.Router();
console.log(`Reporting for duty: "ideasRouter".`);

let ideas = ["Pigs with wings.", "Solid gold toilets", "Newsradio with POTUS-45-mute function"];


ideasRouter.get("/", (req, res, next)=>{
	res.send(`How about these:  {ideas} ?`);
	next();
}  );

/*
ideasRouter.get("/:id", (req, res, next)=>{
	let n = req.params.id;
	res.send(`My fave idea is {ideas[n]}`);
	return;
} );
*/

module.exports = (ideasRouter);
