const express = require("express");

const app = express();


/*
app.get("/", (req, res) => {
	res.send("Hello world from Express.js");
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});

*/

// Application level setting

// Creating routes

//root route


app.get("/", (req, res) => {
	res.send("Welcome to the Home Express created page");
})

const PORT  = 3000; 

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});


// MIddleware
//
// see documentation

